const source_icons = [
	{
		name: 'amazon',
		icon: `<svg fill="#000000" width="32px" height="32px" viewBox="0 -50 1100 1100" xmlns="http://www.w3.org/2000/svg"><path d="M2 776c3.333-5.333 8.666-5.667 16-1 166.666 96.667 348 145 544 145 130.666 0 259.666-24.333 387-73 3.333-1.333 8.166-3.333 14.5-6 6.333-2.667 10.833-4.667 13.5-6 10-4 17.833-2 23.5 6 5.666 8 3.833 15.333-5.5 22-12 8.667-27.334 18.667-46 30-57.334 34-121.334 60.333-192 79-70.667 18.667-139.667 28-207 28-104 0-202.334-18.167-295-54.5C162.333 909.167 79.333 858 6 792c-4-3.333-6-6.667-6-10 0-2 .666-4 2-6zm301-285c0-46 11.333-85.333 34-118 22.666-32.667 53.666-57.333 93-74 36-15.333 80.333-26.333 133-33 18-2 47.333-4.667 88-8v-17c0-42.667-4.667-71.333-14-86-14-20-36-30-66-30h-8c-22 2-41 9-57 21s-26.334 28.667-31 50c-2.667 13.333-9.334 21-20 23l-115-14c-11.334-2.667-17-8.667-17-18 0-2 .333-4.333 1-7 11.333-59.333 39.166-103.333 83.5-132C451.833 19.333 503.666 3.333 563 0h25c76 0 135.333 19.667 178 59a190.52 190.52 0 0 1 18.5 21.5c5.666 7.667 10.166 14.5 13.5 20.5 3.333 6 6.333 14.667 9 26 2.666 11.333 4.666 19.167 6 23.5 1.333 4.333 2.333 13.667 3 28 .666 14.333 1 22.833 1 25.5v242c0 17.333 2.5 33.167 7.5 47.5s9.833 24.667 14.5 31c4.666 6.333 12.333 16.5 23 30.5 4 6 6 11.333 6 16 0 5.333-2.667 10-8 14-55.334 48-85.334 74-90 78-8 6-17.667 6.667-29 2-9.334-8-17.5-15.667-24.5-23s-12-12.667-15-16-7.834-9.833-14.5-19.5c-6.667-9.667-11.334-16.167-14-19.5-37.334 40.667-74 66-110 76-22.667 6.667-50.667 10-84 10-51.334 0-93.5-15.833-126.5-47.5S303 549 303 491zm172-20c0 26 6.5 46.833 19.5 62.5S525 557 547 557c2 0 4.833-.333 8.5-1 3.666-.667 6.166-1 7.5-1 28-7.333 49.666-25.333 65-54 7.333-12.667 12.833-26.5 16.5-41.5 3.666-15 5.666-27.167 6-36.5.333-9.333.5-24.667.5-46v-25c-38.667 0-68 2.667-88 8-58.667 16.667-88 53.667-88 111zm420 322c1.333-2.667 3.333-5.333 6-8 16.666-11.333 32.666-19 48-23 25.333-6.667 50-10.333 74-11 6.666-.667 13-.333 19 1 30 2.667 48 7.667 54 15 2.666 4 4 10 4 18v7c0 23.333-6.334 50.833-19 82.5-12.667 31.667-30.334 57.167-53 76.5-3.334 2.667-6.334 4-9 4-1.334 0-2.667-.333-4-1-4-2-5-5.667-3-11 24.666-58 37-98.333 37-121 0-7.333-1.334-12.667-4-16-6.667-8-25.334-12-56-12-11.334 0-24.667.667-40 2-16.667 2-32 4-46 6-4 0-6.667-.667-8-2-1.334-1.333-1.667-2.667-1-4 0-.667.333-1.667 1-3z"/></svg>`
	},
	{
		name: 'itunes',
		icon: `<svg fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.135 22.899c0.891-0.251 1.577-0.941 1.818-1.816l0.004-0.018 0.077-0.27 0.010-7.23c0.008-5.416 0-7.265-0.030-7.367-0.030-0.104-0.081-0.194-0.148-0.268l0 0.001c-0.094-0.057-0.208-0.091-0.33-0.091-0.005 0-0.010 0-0.015 0h0.001c-0.266 0.022-0.506 0.057-0.74 0.104l0.040-0.007c-1.301 0.237-8.967 1.763-9.099 1.812-0.215 0.087-0.388 0.242-0.496 0.437l-0.084 0.165s-0.039 11.334-0.097 11.462c-0.097 0.2-0.262 0.354-0.464 0.435l-0.006 0.002q-0.378 0.098-0.761 0.171c-0.99 0.063-1.884 0.43-2.602 1.008l0.009-0.007c-0.273 0.273-0.472 0.621-0.563 1.010l-0.003 0.014c-0.031 0.15-0.048 0.323-0.048 0.5 0 0.27 0.041 0.53 0.117 0.775l-0.005-0.018c0.126 0.352 0.328 0.65 0.589 0.886l0.002 0.002c0.238 0.183 0.52 0.323 0.826 0.401l0.016 0.004c0.213 0.036 0.458 0.056 0.708 0.056 0.725 0 1.409-0.172 2.014-0.478l-0.026 0.012c0.331-0.21 0.608-0.471 0.828-0.777l0.006-0.009c0.091-0.142 0.174-0.306 0.243-0.478l0.007-0.020c0.22-0.57 0.226-10.723 0.255-10.851 0.040-0.21 0.195-0.375 0.396-0.429l0.004-0.001c0.184-0.050 7.567-1.508 7.775-1.537 0.027-0.005 0.057-0.008 0.088-0.008 0.143 0 0.271 0.061 0.361 0.158l0 0c0.056 0.029 0.102 0.069 0.135 0.119l0.001 0.001c0.076 0.64 0.12 1.382 0.12 2.134 0 0.474-0.017 0.943-0.051 1.408l0.004-0.062c0.010 3.699 0.015 3.614-0.186 3.848-0.146 0.17-0.329 0.236-1.080 0.387-0.735 0.107-1.398 0.303-2.018 0.578l0.049-0.019c-0.481 0.206-0.861 0.572-1.078 1.031l-0.005 0.013c-0.143 0.267-0.228 0.584-0.228 0.92 0 0.008 0 0.015 0 0.023v-0.001c-0 0.008-0 0.016-0 0.025 0 0.608 0.265 1.154 0.685 1.529l0.002 0.002c0.044 0.043 0.086 0.082 0.13 0.121 0.222 0.174 0.488 0.302 0.778 0.365l0.013 0.002c0.192 0.026 0.415 0.040 0.641 0.040 0.502 0 0.988-0.072 1.446-0.207l-0.036 0.009zM7.881 27.338c2.25 1.643 5.072 2.63 8.124 2.63 4.635 0 8.738-2.274 11.255-5.768l0.028-0.041c1.633-2.263 2.611-5.092 2.611-8.15 0-4.648-2.261-8.768-5.743-11.32l-0.039-0.027c-2.25-1.644-5.072-2.63-8.123-2.63-4.634 0-8.738 2.274-11.254 5.768l-0.028 0.041c-1.633 2.263-2.612 5.093-2.612 8.151 0 4.648 2.261 8.768 5.743 11.32l0.039 0.027zM15.971 30.994c-7.396-0.031-13.524-5.426-14.694-12.494l-0.012-0.087c-0.126-0.731-0.199-1.573-0.199-2.431 0-7.409 5.379-13.562 12.445-14.766l0.089-0.012c0.716-0.121 1.54-0.191 2.381-0.191 7.417 0 13.571 5.404 14.741 12.489l0.012 0.087c0.126 0.731 0.199 1.573 0.199 2.431 0 7.409-5.379 13.562-12.445 14.766l-0.089 0.012c-0.73 0.124-1.57 0.196-2.428 0.196h-0z"></path>
        </svg>`
	},
	{
		name: 'windows store',
		icon: `<svg fill="#000000" width="32px" height="32px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3.241V9.5H18V2L9.5 3.241zM2 9.5h6.5V3.387L2 4.336V9.5zm7.5 7.259L18 18v-7.5H9.5v6.259zM2 15.664l6.5.949V10.5H2v5.164z"/></svg>`
	},
	{
		name: 'google play',
		icon: `<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.65629C2 2.15127 3.59967 1.18549 4.93149 1.88645L20.7844 10.2301C22.2091 10.9799 22.2091 13.0199 20.7844 13.7698L4.9315 22.1134C3.59968 22.8144 2 21.8486 2 20.3436V3.65629ZM19.8529 11.9999L16.2682 10.1132L14.2243 11.9999L16.2682 13.8866L19.8529 11.9999ZM14.3903 14.875L12.75 13.3608L6.75782 18.8921L14.3903 14.875ZM12.75 10.639L14.3903 9.12488L6.75782 5.10777L12.75 10.639ZM4 5.28391L11.2757 11.9999L4 18.7159V5.28391Z" fill="#0F0F0F"/>
        </svg>`
	},
	{ name: 'vudu', icon: '' },
	{
		name: 'youtube',
		icon: `<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z" fill="#0F0F0F"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z" fill="#0F0F0F"/>
        </svg>`
	},
	{ name: 'directtv on demand', icon: '' },
	{ name: 'spectrum on demand', icon: '' },
	{
		name: 'paramount+',
		icon: `<svg width="32px" height="32px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><defs><style>.a{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><polyline class="a" points="31.068 32.847 33.885 37.048 29.585 37.048 27.311 36.208"/><polyline class="a" points="23.027 19.318 22.023 24.89 19.651 30.524 25.137 30.771 23.259 34.132 23.259 37.048 29.585 37.048"/><polyline class="a" points="19.651 30.524 19.107 32.007 17.723 32.847 15.202 35.615 16.586 30.524 22.023 24.89"/><circle class="a" cx="24" cy="24" r="21.5"/><polyline class="a" points="33.885 37.048 40.755 37.048 32.798 28.102 31.315 27.954 25.087 16.932 17.278 25.977 12.632 30.92 7.838 37.048"/><line class="a" x1="27.3115" y1="26.2871" x2="24" y2="24"/><polyline class="a" points="42.154 26.683 41.196 27.655 40.416 26.558"/><polyline class="a" points="41.676 28.933 41.196 27.655 40.037 28.34"/><line class="a" x1="41.1961" y1="27.6551" x2="42.5973" y2="27.953"/><polyline class="a" points="42.146 21.258 41.513 22.468 40.446 21.646"/><polyline class="a" points="42.346 23.55 41.513 22.468 40.605 23.462"/><line class="a" x1="41.5134" y1="22.4678" x2="42.9404" y2="22.3429"/><polyline class="a" points="40.551 16.072 40.3 17.414 39.04 16.941"/><polyline class="a" points="41.413 18.206 40.3 17.414 39.722 18.631"/><line class="a" x1="40.3001" y1="17.4143" x2="41.6283" y2="16.8777"/><polyline class="a" points="37.51 11.58 37.662 12.936 36.319 12.852"/><polyline class="a" points="38.958 13.368 37.662 12.936 37.466 14.268"/><line class="a" x1="37.6624" y1="12.9364" x2="38.7757" y2="12.0349"/><polyline class="a" points="33.288 8.172 33.831 9.425 32.521 9.738"/><polyline class="a" points="35.196 9.459 33.831 9.425 34.032 10.757"/><line class="a" x1="33.8308" y1="9.4253" x2="34.6318" y2="8.2377"/><polyline class="a" points="28.255 6.148 29.14 7.188 27.979 7.869"/><polyline class="a" points="30.455 6.821 29.14 7.188 29.722 8.402"/><line class="a" x1="29.14" y1="7.1879" x2="29.5588" y2="5.818"/><polyline class="a" points="22.85 5.684 24 6.42 23.089 7.411"/><polyline class="a" points="25.15 5.684 24 6.42 24.911 7.411"/><line class="a" x1="24" y1="6.4198" x2="24" y2="4.9873"/><polyline class="a" points="5.846 26.683 6.804 27.655 7.584 26.558"/><polyline class="a" points="6.324 28.933 6.804 27.655 7.963 28.34"/><line class="a" x1="6.8039" y1="27.6551" x2="5.4027" y2="27.953"/><polyline class="a" points="5.854 21.258 6.487 22.468 7.554 21.646"/><polyline class="a" points="5.654 23.55 6.487 22.468 7.395 23.462"/><line class="a" x1="6.4866" y1="22.4678" x2="5.0596" y2="22.3429"/><polyline class="a" points="7.449 16.072 7.7 17.414 8.96 16.941"/><polyline class="a" points="6.587 18.206 7.7 17.414 8.278 18.631"/><line class="a" x1="7.6999" y1="17.4143" x2="6.3717" y2="16.8777"/><polyline class="a" points="10.49 11.58 10.338 12.936 11.681 12.852"/><polyline class="a" points="9.042 13.368 10.338 12.936 10.534 14.268"/><line class="a" x1="10.3376" y1="12.9364" x2="9.2243" y2="12.0349"/><polyline class="a" points="14.712 8.172 14.169 9.425 15.479 9.738"/><polyline class="a" points="12.804 9.459 14.169 9.425 13.968 10.757"/><line class="a" x1="14.1692" y1="9.4253" x2="13.3682" y2="8.2377"/><polyline class="a" points="19.745 6.148 18.86 7.188 20.021 7.869"/><polyline class="a" points="17.545 6.821 18.86 7.188 18.278 8.402"/><line class="a" x1="18.86" y1="7.1879" x2="18.4412" y2="5.818"/></svg>`
	},
	{ name: 'max', icon: '' },
	{
		name: 'disney plus',
		icon: `<svg fill="#000000" width="32px" height="32px" viewBox="0 0 24 24" id="disney-plus" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path id="primary" d="M19,3V7m2-2H17M6.69,9l2,12" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="primary-2" data-name="primary" d="M3,6s12.29-2,13.91,6.77c1.09,5.93-6.58,6.7-9.48,5.89S3,16.06,3,14.06C3,11,8.54,9.45,12,12" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>`
	},
	{ name: 'tnt', icon: '' },
	{ name: 'tbs', icon: '' },
	{ name: 'trutv', icon: '' }
];

export function getIconOfSource(source) {
	const lowercaseSource = source.toLowerCase();

	const foundIcon = source_icons.filter((src) => src.name == lowercaseSource);

	return foundIcon.length > 0 ? foundIcon[0].icon : null;
}