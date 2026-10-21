// Global client scripts & animations
import AOS from 'aos';

window.darkMode = false;

const stickyClasses = [];
const unstickyClasses = [];
const stickyClassesContainer = [
	"shadow-[0px_1px_4px_0_rgba(25,33,61,0.06)]",
	"rounded-[20px]",
	"bg-[#ffffff]/65",
	"border-[#ffffff]/65",
	"dark:border-neutral-600/40",
	"dark:bg-neutral-900/60",
	"backdrop-blur-2xl",
	"backdrop-brightness-120",
];
const unstickyClassesContainer = [
	"shadow-none",
	"border-transparent",
	"rounded-none",
	"bg-transparent",
];
let headerElement = null;

function stickyHeaderFunctionality() {
	window.addEventListener("scroll", () => {
		evaluateHeaderPosition();
	}, { passive: true });
}

function evaluateHeaderPosition() {
	if (!headerElement || !headerElement.firstElementChild) return;
	if (window.scrollY > 48) {
		headerElement.firstElementChild.classList.add(...stickyClassesContainer);
		headerElement.firstElementChild.classList.remove(...unstickyClassesContainer);
		headerElement.classList.add(...stickyClasses);
		headerElement.classList.remove(...unstickyClasses);
	} else {
		headerElement.firstElementChild.classList.remove(...stickyClassesContainer);
		headerElement.firstElementChild.classList.add(...unstickyClassesContainer);
		headerElement.classList.add(...unstickyClasses);
		headerElement.classList.remove(...stickyClasses);
	}
}

function applyMenuItemClasses() {
	const menuItems = document.querySelectorAll("#menu a");
	for (let i = 0; i < menuItems.length; i++) {
		if (menuItems[i].pathname === window.location.pathname) {
			menuItems[i].classList.add("text-neutral-900", "dark:text-white");
		}
	}
}

function mobileMenuFunctionality() {
	const openBtn = document.getElementById("openMenu");
	const closeBtn = document.getElementById("closeMenu");
	if (openBtn) {
		openBtn.onclick = () => {
			openMobileMenu();
		};
	}
	if (closeBtn) {
		closeBtn.onclick = () => {
			closeMobileMenu();
		};
	}
}

function openMobileMenu() {
	const openMenu = document.getElementById("openMenu");
	const closeMenu = document.getElementById("closeMenu");
	const menu = document.getElementById("menu");
	const mobileMenuBackground = document.getElementById("mobileMenuBackground");

	openMenu?.classList.add("hidden");
	closeMenu?.classList.remove("hidden");
	closeMenu?.classList.add("flex");
	menu?.classList.remove("hidden");
	mobileMenuBackground?.classList.add("opacity-0");
	mobileMenuBackground?.classList.remove("hidden");
	document.body.style.overflow = "hidden";

	setTimeout(() => {
		mobileMenuBackground?.classList.remove("opacity-0");
	}, 1);
}

function closeMobileMenu() {
	const openMenu = document.getElementById("openMenu");
	const closeMenu = document.getElementById("closeMenu");
	const menu = document.getElementById("menu");
	const mobileMenuBackground = document.getElementById("mobileMenuBackground");

	closeMenu?.classList.add("hidden");
	closeMenu?.classList.remove("flex");
	openMenu?.classList.remove("hidden");
	menu?.classList.add("hidden");
	mobileMenuBackground?.classList.add("hidden");
	document.body.style.overflow = "";
}

// Expose on window for backward compatibility
window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.evaluateHeaderPosition = evaluateHeaderPosition;
window.stickyHeaderFuncionality = stickyHeaderFunctionality;
window.applyMenuItemClasses = applyMenuItemClasses;

function showDay(animate) {
	const sun = document.getElementById("sun");
	const moon = document.getElementById("moon");
	const dayText = document.getElementById("dayText");
	const nightText = document.getElementById("nightText");

	if (sun) sun.classList.remove("setting");
	if (moon) moon.classList.remove("rising");

	let timeout = 0;
	if (animate && moon) {
		timeout = 500;
		moon.classList.add("setting");
	}

	setTimeout(() => {
		if (dayText) dayText.classList.remove("hidden");
		if (nightText) nightText.classList.add("hidden");
		if (moon) moon.classList.add("hidden");
		if (sun) sun.classList.remove("hidden");

		if (animate) {
			document.documentElement.classList.remove("dark");
			if (sun) sun.classList.add("rising");
		}
	}, timeout);
}

function showNight(animate) {
	const sun = document.getElementById("sun");
	const moon = document.getElementById("moon");
	const dayText = document.getElementById("dayText");
	const nightText = document.getElementById("nightText");

	if (moon) moon.classList.remove("setting");
	if (sun) sun.classList.remove("rising");

	let timeout = 0;
	if (animate && sun) {
		timeout = 500;
		sun.classList.add("setting");
	}

	setTimeout(() => {
		if (nightText) nightText.classList.remove("hidden");
		if (dayText) dayText.classList.add("hidden");
		if (sun) sun.classList.add("hidden");
		if (moon) moon.classList.remove("hidden");

		if (animate) {
			document.documentElement.classList.add("dark");
			if (moon) moon.classList.add("rising");
		}
	}, timeout);
}

function initApp() {
	headerElement = document.getElementById("header");

	try {
		if (
			localStorage.getItem("dark_mode") &&
			localStorage.getItem("dark_mode") === "true"
		) {
			window.darkMode = true;
			showNight();
		} else {
			showDay();
		}
	} catch (e) {}

	try {
		stickyHeaderFunctionality();
		applyMenuItemClasses();
		evaluateHeaderPosition();
		mobileMenuFunctionality();
	} catch (e) {}

	// 初始化 AOS 动效
	try {
		AOS.init({
			duration: 400,
			easing: 'ease-out-cubic',
			once: true,
			offset: 20,
			delay: 0,
		});
		setTimeout(() => {
			AOS.refresh();
		}, 150);
	} catch (e) {
		console.warn("AOS init fallback", e);
	}

	// 兜底保障：若任何元素因动画异常未触发，0.5秒后强制全部呈现，杜绝空白卡片
	setTimeout(() => {
		document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach((el) => {
			el.classList.add('aos-animate');
		});
	}, 500);
}

if (document.readyState === 'loading') {
	document.addEventListener("DOMContentLoaded", initApp);
} else {
	initApp();
}

const darkToggleBtn = document.getElementById("darkToggle");
if (darkToggleBtn) {
	darkToggleBtn.addEventListener("click", () => {
		document.documentElement.classList.add("duration-300");

		if (document.documentElement.classList.contains("dark")) {
			try { localStorage.removeItem("dark_mode"); } catch(e) {}
			showDay(true);
		} else {
			try { localStorage.setItem("dark_mode", "true"); } catch(e) {}
			showNight(true);
		}
	});
}
