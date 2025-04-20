import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// تنظیمات Three.js برای نمایش مدل سه‌بعدی
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

const loader = new GLTFLoader();
loader.load('Wooden Chair.glb', (gltf) => {
    scene.add(gltf.scene);
}, undefined, (error) => {
    console.error('Error loading GLTF model:', error);
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// کد گالری تصاویر (انتقال‌یافته از index.html)
document.querySelectorAll('.gallery_img').forEach(img => {
    img.addEventListener('click', function() {
        const caption = this.nextElementSibling;
        caption.classList.toggle('active');
    });
});

document.querySelectorAll('.image-row_img').forEach(img => {
    img.addEventListener('click', function() {
        const caption = this.nextElementSibling;
        caption.classList.toggle('active');
    });
});

const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === '#gallery')) {
        link.classList.add('active');
    }
});

// کد اسلایدر
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// تغییر خودکار هر 4 ثانیه
setInterval(() => {
    nextSlide();
}, 4000);

// اضافه کردن رویداد برای دکمه‌های ناوبری (اختیاری)
document.querySelector('.next-btn')?.addEventListener('click', nextSlide);
document.querySelector('.prev-btn')?.addEventListener('click', prevSlide);
