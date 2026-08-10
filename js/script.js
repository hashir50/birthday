// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Variables
const openingScreen = document.getElementById('opening-screen');
const mainContent = document.getElementById('main-content');
const giftBox = document.getElementById('gift-box');
const bgMusic = document.getElementById('bg-music');
const lyricsContainer = document.getElementById('lyrics-container');
const lyricsText = document.getElementById('lyrics-text');

// --- LYRICS DATA ---
// Tweak the "time" values (in seconds) to match exactly when the singer sings the line in your music.mp3
const lyricsData = [
    { time: 14.19, text: "It started with a classroom, a dream we couldn't see," },
    { time: 20.62, text: "Two students writing futures, just you and me." },
    { time: 25.29, text: "Through every project, every deadline, every test," },
    { time: 32.08, text: "Six semesters later, you became my very best." },
    { time: 39.04, text: "You turned every challenge into something bright," },
    { time: 45.58, text: "Standing by my side through every long night." },
    { time: 48.84, text: "From lines of code to dreams untold," },
    { time: 51.8, text: "You quietly became my heart to hold." },
    { time: 55.69, text: "Then came Techwiz, where we stood as one," },
    { time: 59.23, text: "Chasing dreams until the day was done." },
    { time: 62.65, text: "I didn't know back then what destiny knew..." },
    { time: 65.44, text: "My forever would begin with you." },
    { time: 68.77, text: "Happy Birthday, Laiba, my love, my light," },
    { time: 74.62, text: "You're the reason every day feels right." },
    { time: 77.93, text: "In your eyes I found my peaceful place," },
    { time: 81.47, text: "In your smile I found amazing grace." },
    { time: 85.28, text: "From classmates then to soulmates now," },
    { time: 88.62, text: "I'll love you forever—I promise somehow." },
    { time: 91.96, text: "Every dream I dream is brighter because of you," },
    { time: 99.1, text: "Happy Birthday... my forever is you." },
    { time: 106.12, text: "You're brilliant with every line of code you write," },
    { time: 110.96, text: "Yet your gentle heart shines even more bright." },
    { time: 115.09, text: "Your innocence still steals my breath away," },
    { time: 121.24, text: "And makes me fall in love every single day." },
    { time: 127.86, text: "You believed in me when I needed you most," },
    { time: 132.3, text: "You're the one I'm forever proud to toast." },
    { time: 135.83, text: "No matter where this journey goes," },
    { time: 139.46, text: "You're the answer my heart always chose." },
    { time: 147.5, text: "One day we'll build a little home," },
    { time: 149.85, text: "Fill it with laughter wherever we roam." },
    { time: 154.23, text: "We'll travel the world, hand in hand," },
    { time: 157.45, text: "Making memories across every land." },
    { time: 161.59, text: "And when our hair has turned to gray," },
    { time: 165.15, text: "I'll still look at you the very same way." },
    { time: 167.74, text: "Because forever isn't just a word to me..." },
    { time: 169.98, text: "It's every moment you'll share with me." },
    { time: 177.48, text: "Happy Birthday, Laiba, my beautiful heart," },
    { time: 181.36, text: "You were my home before the very start." },
    { time: 184.58, text: "Through every sunrise, every star above," },
    { time: 188.04, text: "I'll choose you again with all my love." },
    { time: 191.47, text: "Here's to forever, to dreams coming true," },
    { time: 195.22, text: "To every tomorrow I'll spend with you." },
    { time: 198.3, text: "From Aptech days to our wedding day," },
    { time: 201.64, text: "I'll love you more in every way." },
    { time: 208.51, text: "Happy Birthday, my love." },
    { time: 216.05, text: "I'm grateful that my classmate became my best friend..." },
    { time: 220.79, text: "My fiancée..." },
    { time: 225.08, text: "And soon, my wife. ❤️" }
];
let currentLyricIndex = -1;

bgMusic.addEventListener('timeupdate', () => {
    const currentTime = bgMusic.currentTime;
    
    let newIndex = -1;
    for (let i = 0; i < lyricsData.length; i++) {
        if (currentTime >= lyricsData[i].time) {
            newIndex = i;
        } else {
            break;
        }
    }

    if (newIndex !== currentLyricIndex) {
        currentLyricIndex = newIndex;
        if (newIndex !== -1) {
            lyricsText.style.opacity = 0;
            lyricsText.style.transform = "translateY(5px)";
            
            setTimeout(() => {
                lyricsText.innerText = lyricsData[newIndex].text;
                lyricsContainer.classList.add('visible');
                lyricsText.style.opacity = 1;
                lyricsText.style.transform = "translateY(0)";
            }, 400);
        }
    }
});

// Initial Setup: Hide custom cursor on touch devices
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Cursor Effect
if (!isTouchDevice) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Pixie Dust Trail
        if (Math.random() > 0.3) {
            const trail = document.createElement('div');
            trail.classList.add('cursor-trail');
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            
            const colors = ['#FFD166', '#FF6FAE', '#ffffff', '#a2d2ff'];
            trail.style.background = colors[Math.floor(Math.random() * colors.length)];
            trail.style.boxShadow = `0 0 10px ${trail.style.background}`;
            
            document.body.appendChild(trail);
            
            const fallX = (Math.random() - 0.5) * 50;
            const fallY = Math.random() * 50 + 20;
            
            gsap.to(trail, {
                x: fallX,
                y: fallY,
                opacity: 0,
                scale: 0.1,
                duration: 1 + Math.random(),
                onComplete: () => trail.remove()
            });
        }
    });
} else {
    // Touch particle effect
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        if (Math.random() > 0.3) {
            const trail = document.createElement('div');
            trail.classList.add('cursor-trail');
            trail.style.left = touch.clientX + 'px';
            trail.style.top = touch.clientY + 'px';
            
            const colors = ['#FFD166', '#FF6FAE', '#ffffff', '#a2d2ff'];
            trail.style.background = colors[Math.floor(Math.random() * colors.length)];
            trail.style.boxShadow = `0 0 10px ${trail.style.background}`;
            
            document.body.appendChild(trail);
            
            const fallX = (Math.random() - 0.5) * 50;
            const fallY = Math.random() * 50 + 20;
            
            gsap.to(trail, {
                x: fallX,
                y: fallY,
                opacity: 0,
                scale: 0.1,
                duration: 1 + Math.random(),
                onComplete: () => trail.remove()
            });
        }
    });
}

// Starry Sky Canvas
const canvas = document.getElementById('starry-sky');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        alpha: Math.random(),
        speed: Math.random() * 0.05
    });
}

    window.isWarpSpeed = false;
    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        stars.forEach(star => {
            if(window.isWarpSpeed) {
                const dx = star.x - centerX;
                const dy = star.y - centerY;
                star.x += dx * 0.05;
                star.y += dy * 0.05;
                
                ctx.strokeStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.lineWidth = star.size;
                ctx.beginPath();
                ctx.moveTo(star.x - dx*0.1, star.y - dy*0.1);
                ctx.lineTo(star.x, star.y);
                ctx.stroke();

                if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
                    star.x = centerX + (Math.random() - 0.5) * 20;
                    star.y = centerY + (Math.random() - 0.5) * 20;
                }
            } else {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width;
                }
            }
        });
        requestAnimationFrame(animateStars);
    }
animateStars();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Floating Hearts
function createHeart() {
    const container = document.getElementById('floating-hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 10000);
}
setInterval(createHeart, 500);

// Gift Click Event
giftBox.addEventListener('click', openSurprise);

// Function to handle the opening surprise
function openSurprise() {
    // Glitch effect on screen
    document.body.style.animation = "glitch 0.3s 2";
    
    // Play a computer glitch sound
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();
        const osc = audioCtx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.3);
        osc.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    } catch(e) {}

    gsap.to('#opening-screen', {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            document.getElementById('opening-screen').style.display = 'none';
            document.body.style.animation = "";
            
            // Show terminal
            const terminal = document.getElementById('hacker-terminal');
            terminal.style.display = 'block';
            
            new Typed('#terminal-text', {
                strings: [
                    `C:\\Users\\Hashir\\Heart> execute forever_yours.exe<br>
                    <span style="color:#27c93f">[OK]</span> Initializing Aptech Memory Cores...<br>
                    <span style="color:#27c93f">[OK]</span> Bypassing firewalls to Laiba's Heart...<br>
                    <span style="color:#27c93f">[OK]</span> Target Located: The most beautiful girl in the world.<br>
                    <span style="color:#ffbd2e">[WARN]</span> Extreme levels of love detected. System overload imminent.<br>
                    <span style="color:#27c93f">[OK]</span> Syncing Heartbeats [100%]<br>
                    <span style="color:#27c93f">[OK]</span> Initiating Magic Protocol...`
                ],
                typeSpeed: 30,
                showCursor: true,
                onComplete: () => {
                    setTimeout(() => {
                        // Explode terminal
                        gsap.to(terminal, {
                            scale: 1.5,
                            opacity: 0,
                            filter: 'blur(10px)',
                            duration: 0.5,
                            onComplete: () => {
                                terminal.style.display = 'none';
                                startWarpSpeed();
                            }
                        });
                    }, 1000);
                }
            });
        }
    });
}

function startWarpSpeed() {
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) bgMusic.play();

    window.isWarpSpeed = true;
    setTimeout(() => {
        window.isWarpSpeed = false;
        const mainContent = document.getElementById('main-content');
        mainContent.style.display = 'block';
        
        gsap.to(mainContent, {
            opacity: 1,
            duration: 2,
            onComplete: () => {
                document.body.style.overflowY = 'auto';
                initMainAnimations();
            }
        });
    }, 2000); // 2 seconds of warp
}

// Main Animations
function initMainAnimations() {
    // Main Scene Text Fade In
    const texts = document.querySelectorAll('.fade-text');
    gsap.to(texts, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#main-scene",
            start: "top center"
        }
    });

    // Initialize Swiper
    const swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // Pause Swiper on hover
    document.querySelector('.mySwiper').addEventListener('mouseenter', () => {
        swiper.autoplay.stop();
    });
    document.querySelector('.mySwiper').addEventListener('mouseleave', () => {
        swiper.autoplay.start();
    });

    // Image Modal
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close-modal');
    
    document.querySelectorAll('.swiper-slide img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    // Envelope & Typed.js Love Letter
    const envelope = document.getElementById('envelope-wrapper');
    if (envelope) {
        envelope.addEventListener('click', () => {
            if(!envelope.classList.contains('open')) {
                envelope.classList.add('open');
                if(navigator.vibrate) navigator.vibrate(50);
                
                setTimeout(() => {
                    if(!window.typedStarted) {
                        window.typedStarted = true;
                        new Typed('#typed-text', {
                            strings: [
                                `Dear Laiba,<br><br>
                                From the first day we met during our Aptech diploma, I never imagined my classmate and teammate would become the love of my life.<br><br>
                                Every assignment, every project, every Techwiz memory brought us closer.<br><br>
                                Your beautiful eyes, your smile, your innocence, and your kind heart make me fall in love with you every single day.<br><br>
                                You are not only an amazing software engineer...<br><br>
                                You are the most beautiful chapter of my life.<br><br>
                                I can't wait to marry you.<br>
                                Travel the world with you.<br>
                                Build our dream home.<br>
                                Grow old beside you.<br><br>
                                Happy Birthday, my love.<br><br>
                                Forever Yours,<br>
                                Hashir ❤️`
                            ],
                            typeSpeed: 30,
                            showCursor: false
                        });
                    }
                }, 1000);
            }
        });
    }

    // Text Messages Stagger
    gsap.to('.message', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 1,
        ease: "back.out(1.5)",
        scrollTrigger: {
            trigger: "#text-memories",
            start: "top 70%"
        }
    });

    // Reasons Cards Stagger
    gsap.to('.reason-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: "#reasons",
            start: "top 70%"
        }
    });

    // Dream Together Icons
    gsap.to('.dream-icon', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
            trigger: "#dream-together",
            start: "top 70%"
        }
    });

    // Final Scene Animation
    const finalTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#final-scene",
            start: "top 50%"
        }
    });

    finalTl.to('.final-pause', { opacity: 1, duration: 2 })
           .to('.final-pause', { opacity: 0, duration: 1, delay: 1 })
           .to('.final-promise p', { opacity: 1, scale: 1, duration: 1.5, stagger: 1.5 })
           .to('.final-greeting', { opacity: 1, y: -20, duration: 2, delay: 1, onComplete: triggerEndingAnimation });
    // 3D Tilt Effect for Cards
    const tiltElements = document.querySelectorAll('.reason-card, .glass-card, .dream-icon, .scratch-container');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            el.style.transition = 'none';
            el.style.zIndex = '10';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
            el.style.transition = 'all 0.5s ease';
            el.style.zIndex = '1';
        });
    });

    // Scratch to Reveal Logic
    const scratchCanvas = document.getElementById('scratch-canvas');
    if (scratchCanvas) {
        const sCtx = scratchCanvas.getContext('2d');
        scratchCanvas.width = 320;
        scratchCanvas.height = 320;

        // Fill with stardust
        sCtx.fillStyle = '#141B3A';
        sCtx.fillRect(0, 0, 320, 320);
        for(let i=0; i<150; i++) {
            sCtx.fillStyle = Math.random() > 0.5 ? '#FFD166' : '#FF6FAE';
            sCtx.beginPath();
            sCtx.arc(Math.random()*320, Math.random()*320, Math.random()*2.5, 0, Math.PI*2);
            sCtx.fill();
        }
        
        sCtx.font = "bold 22px Montserrat";
        sCtx.fillStyle = "#ffffff";
        sCtx.textAlign = "center";
        sCtx.fillText("✨ Scratch Here ✨", 160, 160);

        let isDrawing = false;
        function scratch(x, y) {
            sCtx.globalCompositeOperation = 'destination-out';
            sCtx.beginPath();
            sCtx.arc(x, y, 35, 0, Math.PI * 2);
            sCtx.fill();
        }

        const startDrawing = (e) => { isDrawing = true; draw(e); };
        const stopDrawing = () => { isDrawing = false; };
        const draw = (e) => {
            if (!isDrawing) return;
            e.preventDefault();
            const rect = scratchCanvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            scratch(clientX - rect.left, clientY - rect.top);
        };

        scratchCanvas.addEventListener('mousedown', startDrawing);
        scratchCanvas.addEventListener('mousemove', draw);
        scratchCanvas.addEventListener('mouseup', stopDrawing);
        scratchCanvas.addEventListener('mouseleave', stopDrawing);
        scratchCanvas.addEventListener('touchstart', startDrawing, {passive: false});
        scratchCanvas.addEventListener('touchmove', draw, {passive: false});
        scratchCanvas.addEventListener('touchend', stopDrawing);
    }

    // Heartbeat Sync Logic
    const heartBtn = document.getElementById('heart-btn');
    const heartSection = document.getElementById('heartbeat-sync');
    const circle = document.querySelector('.progress-ring__circle');
    const hiddenMsg = document.getElementById('heartbeat-message');
    const heartIcon = document.querySelector('.heart-icon');
    
    if (heartBtn && circle) {
        const circumference = 2 * Math.PI * 70; // r=70
        let holdTimer;
        let progress = 0;
        let isHolding = false;
        
        const updateProgress = () => {
            if (!isHolding) return;
            progress += 1.5; 
            
            // Speed up heartbeat animation
            const speed = Math.max(0.3, 1.5 - (progress / 100));
            heartIcon.style.animationDuration = speed + 's';
            
            const offset = circumference - (progress / 100) * circumference;
            circle.style.strokeDashoffset = offset;
            
            if (progress >= 100) {
                // Success!
                clearInterval(holdTimer);
                isHolding = false;
                
                // Vibrate if mobile
                if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 300]);
                
                // Explode effect
                heartIcon.style.transform = 'scale(5)';
                heartIcon.style.opacity = '0';
                circle.style.opacity = '0';
                
                setTimeout(() => {
                    hiddenMsg.classList.add('show');
                    heartSection.classList.add('active');
                    
                    confetti({
                        particleCount: 150,
                        spread: 120,
                        origin: { y: 0.6 },
                        colors: ['#ff4c98', '#ffffff', '#FFD166']
                    });
                }, 300);
            }
        };

        const startHold = (e) => {
            if(e.type === 'touchstart') e.preventDefault();
            if (progress >= 100) return;
            isHolding = true;
            clearInterval(holdTimer);
            holdTimer = setInterval(updateProgress, 50);
        };

        const stopHold = () => {
            if (progress >= 100) return;
            isHolding = false;
            clearInterval(holdTimer);
            // Reset progress smoothly
            const fadeBack = setInterval(() => {
                if (isHolding || progress <= 0) {
                    clearInterval(fadeBack);
                    return;
                }
                progress -= 2;
                if(progress < 0) progress = 0;
                circle.style.strokeDashoffset = circumference - (progress / 100) * circumference;
                heartIcon.style.animationDuration = '1.5s';
            }, 20);
        };

        heartBtn.addEventListener('mousedown', startHold);
        heartBtn.addEventListener('touchstart', startHold, {passive: false});
        window.addEventListener('mouseup', stopHold);
        window.addEventListener('touchend', stopHold);
    }

    // Click anywhere for fireworks in Final Scene
    const finalScene = document.getElementById('final-scene');
    if(finalScene) {
        finalScene.addEventListener('click', (e) => {
            // Ignore if clicking the danger button
            if (e.target.id === 'gravity-btn') return;
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            confetti({
                particleCount: 60,
                spread: 80,
                origin: { x: x, y: y },
                colors: ['#FFD166', '#FF6FAE', '#ffffff']
            });
        });
    }

    // Gravity Break Logic
    const gravBtn = document.getElementById('gravity-btn');
    if(gravBtn) {
        gravBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent fireworks
            const bgMusic = document.getElementById('bg-music');
            if(bgMusic) bgMusic.pause();
            
            // Record scratch sound
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                const audioCtx = new AudioContext();
                const osc = audioCtx.createOscillator();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(800, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(10, audioCtx.currentTime + 0.3);
                osc.connect(audioCtx.destination);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.3);
            } catch(e) {}

            const allElements = document.querySelectorAll('.scene > *:not(#gravity-btn):not(canvas)');
            allElements.forEach(el => {
                const rot = (Math.random() - 0.5) * 120;
                const drop = window.innerHeight * 1.5;
                el.style.transition = 'all 2s cubic-bezier(0.55, 0.085, 0.68, 0.53)';
                el.style.transform = `translateY(${drop}px) rotate(${rot}deg)`;
                el.style.opacity = '0';
            });
            
            setTimeout(() => {
                const fixMsg = document.createElement('h1');
                fixMsg.innerHTML = "Even if my whole world falls apart...<br><span style='color:#FF6FAE'>I will always put it back together for you.</span>";
                fixMsg.style.position = 'fixed';
                fixMsg.style.top = '40%';
                fixMsg.style.width = '100%';
                fixMsg.style.textAlign = 'center';
                fixMsg.style.color = 'white';
                fixMsg.style.fontFamily = 'Montserrat, sans-serif';
                fixMsg.style.fontSize = '2.5rem';
                fixMsg.style.opacity = '0';
                fixMsg.style.zIndex = '10000';
                document.body.appendChild(fixMsg);
                
                gsap.to(fixMsg, {opacity: 1, duration: 2});
                
                setTimeout(() => {
                    gsap.to(fixMsg, {opacity: 0, duration: 1, onComplete: () => fixMsg.remove()});
                    // Rebuild
                    if(bgMusic) bgMusic.play();
                    allElements.forEach(el => {
                        el.style.transition = 'all 1.5s ease-out';
                        el.style.transform = '';
                        el.style.opacity = '';
                    });
                }, 4500);
            }, 2000);
        });
    }
}

// Ending Animation
function triggerEndingAnimation() {
    // Fireworks and Confetti Loop
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    // Increase star speed and heart generation
    stars.forEach(star => star.speed *= 5);
    setInterval(createHeart, 200);
}

// --- MAGIC POLAROIDS ON DOUBLE CLICK ---
const polaroidCaptions = [
    "Our best days...",
    "My favorite smile",
    "Forever mine",
    "Aptech memories",
    "Just you and me",
    "Perfect."
];
const polaroidImages = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg'];

document.addEventListener('dblclick', (e) => {
    // Ignore double clicks on specific interactive elements
    if (e.target.closest('button, .heart-button, canvas, .swiper, .polaroid')) return;

    // Camera Flash effect
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = 0; flash.style.left = 0; flash.style.width = '100%'; flash.style.height = '100%';
    flash.style.backgroundColor = 'white';
    flash.style.zIndex = 99999;
    flash.style.transition = 'opacity 0.5s';
    document.body.appendChild(flash);
    setTimeout(() => { flash.style.opacity = 0; }, 50);
    setTimeout(() => { flash.remove(); }, 500);

    // Create Polaroid
    const p = document.createElement('div');
    p.classList.add('polaroid');
    
    const randomImg = polaroidImages[Math.floor(Math.random() * polaroidImages.length)];
    const randomCap = polaroidCaptions[Math.floor(Math.random() * polaroidCaptions.length)];
    
    p.innerHTML = `
        <div class="polaroid-inner">
            <img src="assets/${randomImg}" onerror="this.src='https://images.unsplash.com/photo-1518199268839-497c413b56f8?auto=format&fit=crop&w=300&q=80'">
            <p>${randomCap}</p>
        </div>
    `;
    
    // Position at mouse (centered)
    p.style.left = (e.clientX - 100) + 'px';
    p.style.top = (e.clientY - 120) + 'px';
    
    // Random rotation between -20 and 20 degrees
    const rot = (Math.random() * 40) - 20;
    p.style.transform = `rotate(${rot}deg) scale(0)`;
    
    document.body.appendChild(p);
    
    // Play a shutter sound (using Web Audio API for a synthesized click)
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(100, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    } catch(e) {}
    
    // Animate in
    setTimeout(() => {
        p.style.transform = `rotate(${rot}deg) scale(1)`;
    }, 50);
    
    // Make Draggable
    makeDraggable(p);
});

function makeDraggable(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    el.onmousedown = dragMouseDown;
    el.ontouchstart = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        if(e.type !== 'touchstart') e.preventDefault();
        pos3 = e.clientX || (e.touches && e.touches[0].clientX);
        pos4 = e.clientY || (e.touches && e.touches[0].clientY);
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;
        
        // Bring to front
        const allPolaroids = document.querySelectorAll('.polaroid');
        allPolaroids.forEach(p => p.style.zIndex = 1000);
        el.style.zIndex = 1001;
    }

    function elementDrag(e) {
        e = e || window.event;
        if(e.type !== 'touchmove') e.preventDefault();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        pos1 = pos3 - clientX;
        pos2 = pos4 - clientY;
        pos3 = clientX;
        pos4 = clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
    }
}
