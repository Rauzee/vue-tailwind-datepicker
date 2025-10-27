(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-green-700:oklch(52.7% .154 150.069);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-200:oklch(90.1% .058 230.902);--color-sky-300:oklch(82.8% .111 230.318);--color-sky-400:oklch(74.6% .16 232.661);--color-sky-500:oklch(68.5% .169 237.323);--color-sky-600:oklch(58.8% .158 241.966);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-sky-900:oklch(39.1% .09 240.876);--color-sky-950:oklch(29.3% .066 243.157);--color-indigo-50:oklch(96.2% .018 272.314);--color-indigo-200:oklch(87% .065 274.039);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-400:oklch(67.3% .182 276.935);--color-indigo-900:oklch(35.9% .144 278.697);--color-slate-800:oklch(27.9% .041 260.031);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height:1.5;--font-weight-light:300;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--leading-relaxed:1.625;--radius-xs:.125rem;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-vtd-primary-50:var(--color-sky-50);--color-vtd-primary-100:var(--color-sky-100);--color-vtd-primary-300:var(--color-sky-300);--color-vtd-primary-500:var(--color-sky-500);--color-vtd-primary-600:var(--color-sky-600);--color-vtd-primary-700:var(--color-sky-700);--color-vtd-secondary-50:var(--color-gray-50);--color-vtd-secondary-100:var(--color-gray-100);--color-vtd-secondary-300:var(--color-gray-300);--color-vtd-secondary-400:var(--color-gray-400);--color-vtd-secondary-500:var(--color-gray-500);--color-vtd-secondary-600:var(--color-gray-600);--color-vtd-secondary-700:var(--color-gray-700);--color-vtd-secondary-900:var(--color-gray-900)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}[type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-color:oklch(55.1% .027 264.364);border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem}:is([type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select):focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:oklch(54.6% .245 262.881);outline:2px solid #0000}input::placeholder,textarea::placeholder{color:oklch(55.1% .027 264.364);opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-date-and-time-value{text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{-webkit-print-color-adjust:exact;print-color-adjust:exact;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='oklch(55.1%25 0.027 264.364)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;-webkit-print-color-adjust:unset;print-color-adjust:unset;padding-right:.75rem}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:middle;-webkit-user-select:none;user-select:none;color:oklch(54.6% .245 262.881);--tw-shadow:0 0 #0000;background-color:#fff;background-origin:border-box;border-width:1px;border-color:oklch(55.1% .027 264.364);flex-shrink:0;width:1rem;height:1rem;padding:0;display:inline-block}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid #0000}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=checkbox]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=radio]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{background-color:currentColor;border-color:#0000}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}@media (forced-colors:active){[type=checkbox]:indeterminate{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{background-color:currentColor;border-color:#0000}[type=file]{background:unset;border-color:inherit;font-size:unset;line-height:inherit;border-width:0;border-radius:0;padding:0}[type=file]:focus{outline:1px solid buttontext;outline:1px auto -webkit-focus-ring-color}}@layer components;@layer utilities{.invisible{visibility:hidden}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-1\\/2{top:50%}.top-full{top:100%}.right-0{right:calc(var(--spacing)*0)}.right-auto{right:auto}.-left-2{left:calc(var(--spacing)*-2)}.left-0{left:calc(var(--spacing)*0)}.left-auto{left:auto}.z-50{z-index:50}.order-last{order:9999}.col-span-7{grid-column:span 7/span 7}.mx-2{margin-inline:calc(var(--spacing)*2)}.my-1{margin-block:calc(var(--spacing)*1)}.my-5{margin-block:calc(var(--spacing)*5)}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-1\\.5{margin-top:calc(var(--spacing)*1.5)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mr-1{margin-right:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-4{margin-left:calc(var(--spacing)*4)}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-\\[2\\.7rem\\]{height:2.7rem}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-1\\/2{width:50%}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-\\[2\\.7rem\\]{width:2.7rem}.w-full{width:100%}.flex-1{flex:1}.flex-none{flex:none}.shrink-0{flex-shrink:0}.-translate-y-2\\/4{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-3{--tw-translate-y:calc(var(--spacing)*3);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-default{cursor:default}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-x-1\\.5>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1.5)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1.5)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.gap-y-0\\.5{row-gap:calc(var(--spacing)*.5)}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-xs{border-radius:var(--radius-xs)}.rounded-l-full{border-top-left-radius:3.40282e38px;border-bottom-left-radius:3.40282e38px}.rounded-r-full{border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.border-solid{--tw-border-style:solid;border-style:solid}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-black\\/\\[\\.1\\]{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/\\[\\.1\\]{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-gray-200{border-color:var(--color-gray-200)}.border-indigo-200{border-color:var(--color-indigo-200)}.border-red-200{border-color:var(--color-red-200)}.border-transparent{border-color:#0000}.border-vtd-secondary-300{border-color:var(--color-vtd-secondary-300)}.bg-black{background-color:var(--color-black)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-indigo-50{background-color:var(--color-indigo-50)}.bg-red-100{background-color:var(--color-red-100)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-vtd-primary-100{background-color:var(--color-vtd-primary-100)}.bg-vtd-primary-500{background-color:var(--color-vtd-primary-500)}.bg-vtd-primary-600{background-color:var(--color-vtd-primary-600)}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-10{padding:calc(var(--spacing)*10)}.px-0\\.5{padding-inline:calc(var(--spacing)*.5)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-5{padding-right:calc(var(--spacing)*5)}.pr-12{padding-right:calc(var(--spacing)*12)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-center{text-align:center}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[8px\\]{font-size:8px}.leading-6{--tw-leading:calc(var(--spacing)*6);line-height:calc(var(--spacing)*6)}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.whitespace-nowrap{white-space:nowrap}.text-gray-400{color:var(--color-gray-400)}.text-gray-900{color:var(--color-gray-900)}.text-green-700{color:var(--color-green-700)}.text-indigo-400{color:var(--color-indigo-400)}.text-slate-800{color:var(--color-slate-800)}.text-vtd-primary-500{color:var(--color-vtd-primary-500)}.text-vtd-primary-600{color:var(--color-vtd-primary-600)}.text-vtd-secondary-400{color:var(--color-vtd-secondary-400)}.text-vtd-secondary-500{color:var(--color-vtd-secondary-500)}.text-vtd-secondary-600{color:var(--color-vtd-secondary-600)}.text-vtd-secondary-700{color:var(--color-vtd-secondary-700)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.placeholder-vtd-secondary-400::placeholder{color:var(--color-vtd-secondary-400)}.opacity-0{opacity:0}.opacity-30{opacity:.3}.opacity-50{opacity:.5}.opacity-100{opacity:1}.shadow,.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.hover\\:bg-vtd-primary-700:hover{background-color:var(--color-vtd-primary-700)}.hover\\:bg-vtd-secondary-50:hover{background-color:var(--color-vtd-secondary-50)}.hover\\:bg-vtd-secondary-100:hover{background-color:var(--color-vtd-secondary-100)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:text-indigo-900:hover{color:var(--color-indigo-900)}.hover\\:text-vtd-primary-700:hover{color:var(--color-vtd-primary-700)}.hover\\:text-vtd-secondary-900:hover{color:var(--color-vtd-secondary-900)}}.focus\\:border-vtd-primary-300:focus{border-color:var(--color-vtd-primary-300)}.focus\\:bg-vtd-primary-50:focus{background-color:var(--color-vtd-primary-50)}.focus\\:bg-vtd-secondary-100:focus{background-color:var(--color-vtd-secondary-100)}.focus\\:text-vtd-primary-600:focus{color:var(--color-vtd-primary-600)}.focus\\:text-vtd-secondary-900:focus{color:var(--color-vtd-secondary-900)}.focus\\:ring:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-3:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-gray-300:focus{--tw-ring-color:var(--color-gray-300)}.focus\\:ring-indigo-300:focus{--tw-ring-color:var(--color-indigo-300)}.focus\\:ring-vtd-primary-500:focus{--tw-ring-color:var(--color-vtd-primary-500)}.focus\\:ring-vtd-primary-500\\/10:focus{--tw-ring-color:#00a5ef1a}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-vtd-primary-500\\/10:focus{--tw-ring-color:color-mix(in oklab,var(--color-vtd-primary-500)10%,transparent)}}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:ring-offset-white:focus{--tw-ring-offset-color:var(--color-white)}.focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:text-vtd-secondary-500:disabled{color:var(--color-vtd-secondary-500)}@media (min-width:40rem){.sm\\:relative{position:relative}.sm\\:static{position:static}.sm\\:z-auto{z-index:auto}.sm\\:order-0{order:0}.sm\\:mx-1{margin-inline:calc(var(--spacing)*1)}.sm\\:mt-0{margin-top:calc(var(--spacing)*0)}.sm\\:mt-1{margin-top:calc(var(--spacing)*1)}.sm\\:mt-2\\.5{margin-top:calc(var(--spacing)*2.5)}.sm\\:mr-2{margin-right:calc(var(--spacing)*2)}.sm\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.sm\\:mb-1{margin-bottom:calc(var(--spacing)*1)}.sm\\:mb-1\\.5{margin-bottom:calc(var(--spacing)*1.5)}.sm\\:ml-2{margin-left:calc(var(--spacing)*2)}.sm\\:ml-3{margin-left:calc(var(--spacing)*3)}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:w-auto{width:auto}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:flex-row-reverse{flex-direction:row-reverse}.sm\\:flex-nowrap{flex-wrap:nowrap}:where(.sm\\:space-x-4>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*4)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-x-reverse)))}.sm\\:overflow-visible{overflow:visible}.sm\\:rounded-lg{border-radius:var(--radius-lg)}.sm\\:border{border-style:var(--tw-border-style);border-width:1px}.sm\\:border-t-0{border-top-style:var(--tw-border-style);border-top-width:0}.sm\\:border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.sm\\:px-2{padding-inline:calc(var(--spacing)*2)}.sm\\:px-4{padding-inline:calc(var(--spacing)*4)}.sm\\:px-6{padding-inline:calc(var(--spacing)*6)}.sm\\:pr-6{padding-right:calc(var(--spacing)*6)}.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.sm\\:leading-4{--tw-leading:calc(var(--spacing)*4);line-height:calc(var(--spacing)*4)}.sm\\:font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.sm\\:shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@media (min-width:48rem){.md\\:w-1\\/2{width:50%}}@media (min-width:64rem){.lg\\:mx-0{margin-inline:calc(var(--spacing)*0)}.lg\\:mr-1{margin-right:calc(var(--spacing)*1)}.lg\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.lg\\:block{display:block}.lg\\:h-10{height:calc(var(--spacing)*10)}.lg\\:w-10{width:calc(var(--spacing)*10)}.lg\\:w-80{width:calc(var(--spacing)*80)}.lg\\:flex-nowrap{flex-wrap:nowrap}.lg\\:border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.lg\\:border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.lg\\:text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}}@media (min-width:96rem){.\\32xl\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}}.vtd-datepicker-overlay.open:before{opacity:.5;display:block}.vtd-datepicker:before{--vtd-datepicker:0px;content:"";top:calc(var(--spacing)*0);height:calc(var(--spacing)*4);width:calc(var(--spacing)*4);border-style:var(--tw-border-style);border-width:1px;border-color:#0000001a;position:absolute}@supports (color:color-mix(in lab,red,red)){.vtd-datepicker:before{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.vtd-datepicker:before{background-color:var(--color-white);--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);clip-path:polygon(calc(var(--vtd-datepicker)*-1)calc(var(--vtd-datepicker)*-1),calc(100% + var(--vtd-datepicker))calc(var(--vtd-datepicker)*-1),calc(100% + var(--vtd-datepicker))calc(100% + var(--vtd-datepicker)));transform:translate(50%,-50%)rotate(-45deg)}.vtd-datepicker.place-left:before{left:calc(var(--spacing)*1)}.vtd-datepicker.place-right:before{right:calc(var(--spacing)*5)}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}`)),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as mt from "vue";
import { watchEffect as $e, ref as J, computed as le, onMounted as ot, cloneVNode as to, h as ve, Fragment as ge, defineComponent as ue, inject as De, provide as re, getCurrentInstance as oo, watch as lt, onUnmounted as et, Teleport as no, reactive as xt, shallowRef as ao, openBlock as W, createElementBlock as q, createElementVNode as T, withDirectives as me, vShow as pe, toDisplayString as ae, renderList as Ke, withModifiers as _e, unref as se, createCommentVNode as he, createVNode as te, TransitionGroup as ro, withCtx as Ne, normalizeClass as Te, Transition as wt, nextTick as He, isProxy as so, createBlock as Ue, renderSlot as ft, mergeProps as lo, vModelText as uo } from "vue";
var pt;
let io = Symbol("headlessui.useid"), co = 0;
const Re = (pt = mt.useId) != null ? pt : function() {
  return mt.inject(io, () => `${++co}`)();
};
function H(e) {
  var n;
  if (e == null || e.value == null)
    return null;
  let s = (n = e.value.$el) != null ? n : e.value;
  return s instanceof Node ? s : null;
}
function Pe(e, n, ...s) {
  if (e in n) {
    let l = n[e];
    return typeof l == "function" ? l(...s) : l;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, Pe), t;
}
var mo = Object.defineProperty, fo = (e, n, s) => n in e ? mo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[n] = s, vt = (e, n, s) => (fo(e, typeof n != "symbol" ? n + "" : n, s), s);
let po = class {
  constructor() {
    vt(this, "current", this.detect()), vt(this, "currentId", 0);
  }
  set(n) {
    this.current !== n && (this.currentId = 0, this.current = n);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, nt = new po();
function Ae(e) {
  if (nt.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let n = H(e);
    if (n)
      return n.ownerDocument;
  }
  return document;
}
let ut = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Me = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Me || {}), tt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(tt || {}), vo = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(vo || {});
function at(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ut)).sort((n, s) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (s.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ct = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ct || {});
function jt(e, n = 0) {
  var s;
  return e === ((s = Ae(e)) == null ? void 0 : s.body) ? !1 : Pe(n, { 0() {
    return e.matches(ut);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(ut))
        return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
var ho = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(ho || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let yo = ["textarea", "input"].join(",");
function bo(e) {
  var n, s;
  return (s = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, yo)) != null ? s : !1;
}
function go(e, n = (s) => s) {
  return e.slice().sort((s, t) => {
    let l = n(s), v = n(t);
    if (l === null || v === null)
      return 0;
    let u = l.compareDocumentPosition(v);
    return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ee(e, n, { sorted: s = !0, relativeTo: t = null, skipElements: l = [] } = {}) {
  var v;
  let u = (v = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? v : document, a = Array.isArray(e) ? s ? go(e) : e : at(e);
  l.length > 0 && a.length > 1 && (a = a.filter((N) => !l.includes(N))), t = t ?? u.activeElement;
  let g = (() => {
    if (n & 5)
      return 1;
    if (n & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = (() => {
    if (n & 1)
      return 0;
    if (n & 2)
      return Math.max(0, a.indexOf(t)) - 1;
    if (n & 4)
      return Math.max(0, a.indexOf(t)) + 1;
    if (n & 8)
      return a.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = n & 32 ? { preventScroll: !0 } : {}, y = 0, x = a.length, O;
  do {
    if (y >= x || y + x <= 0)
      return 0;
    let N = h + y;
    if (n & 16)
      N = (N + x) % x;
    else {
      if (N < 0)
        return 3;
      if (N >= x)
        return 1;
    }
    O = a[N], O == null || O.focus(f), y += g;
  } while (O !== u.activeElement);
  return n & 6 && bo(O) && O.select(), 2;
}
function xo() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function wo() {
  return /Android/gi.test(window.navigator.userAgent);
}
function jo() {
  return xo() || wo();
}
function Ge(e, n, s) {
  nt.isServer || $e((t) => {
    document.addEventListener(e, n, s), t(() => document.removeEventListener(e, n, s));
  });
}
function $t(e, n, s) {
  nt.isServer || $e((t) => {
    window.addEventListener(e, n, s), t(() => window.removeEventListener(e, n, s));
  });
}
function $o(e, n, s = le(() => !0)) {
  function t(v, u) {
    if (!s.value || v.defaultPrevented)
      return;
    let a = u(v);
    if (a === null || !a.getRootNode().contains(a))
      return;
    let g = function h(f) {
      return typeof f == "function" ? h(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(e);
    for (let h of g) {
      if (h === null)
        continue;
      let f = h instanceof HTMLElement ? h : H(h);
      if (f != null && f.contains(a) || v.composed && v.composedPath().includes(f))
        return;
    }
    return !jt(a, ct.Loose) && a.tabIndex !== -1 && v.preventDefault(), n(v, a);
  }
  let l = J(null);
  Ge("pointerdown", (v) => {
    var u, a;
    s.value && (l.value = ((a = (u = v.composedPath) == null ? void 0 : u.call(v)) == null ? void 0 : a[0]) || v.target);
  }, !0), Ge("mousedown", (v) => {
    var u, a;
    s.value && (l.value = ((a = (u = v.composedPath) == null ? void 0 : u.call(v)) == null ? void 0 : a[0]) || v.target);
  }, !0), Ge("click", (v) => {
    jo() || l.value && (t(v, () => l.value), l.value = null);
  }, !0), Ge("touchend", (v) => t(v, () => v.target instanceof HTMLElement ? v.target : null), !0), $t("blur", (v) => t(v, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function ht(e, n) {
  if (e)
    return e;
  let s = n ?? "button";
  if (typeof s == "string" && s.toLowerCase() === "button")
    return "button";
}
function ko(e, n) {
  let s = J(ht(e.value.type, e.value.as));
  return ot(() => {
    s.value = ht(e.value.type, e.value.as);
  }), $e(() => {
    var t;
    s.value || H(n) && H(n) instanceof HTMLButtonElement && !((t = H(n)) != null && t.hasAttribute("type")) && (s.value = "button");
  }), s;
}
var ze = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ze || {}), _o = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(_o || {});
function Oe({ visible: e = !0, features: n = 0, ourProps: s, theirProps: t, ...l }) {
  var v;
  let u = _t(t, s), a = Object.assign(l, { props: u });
  if (e || n & 2 && u.static)
    return st(a);
  if (n & 1) {
    let g = (v = u.unmount) == null || v ? 0 : 1;
    return Pe(g, { 0() {
      return null;
    }, 1() {
      return st({ ...l, props: { ...u, hidden: !0, style: { display: "none" } } });
    } });
  }
  return st(a);
}
function st({ props: e, attrs: n, slots: s, slot: t, name: l }) {
  var v, u;
  let { as: a, ...g } = Mo(e, ["unmount", "static"]), h = (v = s.default) == null ? void 0 : v.call(s, t), f = {};
  if (t) {
    let y = !1, x = [];
    for (let [O, N] of Object.entries(t))
      typeof N == "boolean" && (y = !0), N === !0 && x.push(O);
    y && (f["data-headlessui-state"] = x.join(" "));
  }
  if (a === "template") {
    if (h = kt(h ?? []), Object.keys(g).length > 0 || Object.keys(n).length > 0) {
      let [y, ...x] = h ?? [];
      if (!So(y) || x.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(g).concat(Object.keys(n)).map((F) => F.trim()).filter((F, V, Y) => Y.indexOf(F) === V).sort((F, V) => F.localeCompare(V)).map((F) => `  - ${F}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((F) => `  - ${F}`).join(`
`)].join(`
`));
      let O = _t((u = y.props) != null ? u : {}, g, f), N = to(y, O, !0);
      for (let F in O)
        F.startsWith("on") && (N.props || (N.props = {}), N.props[F] = O[F]);
      return N;
    }
    return Array.isArray(h) && h.length === 1 ? h[0] : h;
  }
  return ve(a, Object.assign({}, g, f), { default: () => h });
}
function kt(e) {
  return e.flatMap((n) => n.type === ge ? kt(n.children) : [n]);
}
function _t(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let n = {}, s = {};
  for (let t of e)
    for (let l in t)
      l.startsWith("on") && typeof t[l] == "function" ? (s[l] != null || (s[l] = []), s[l].push(t[l])) : n[l] = t[l];
  if (n.disabled || n["aria-disabled"])
    return Object.assign(n, Object.fromEntries(Object.keys(s).map((t) => [t, void 0])));
  for (let t in s)
    Object.assign(n, { [t](l, ...v) {
      let u = s[t];
      for (let a of u) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        a(l, ...v);
      }
    } });
  return n;
}
function Mo(e, n = []) {
  let s = Object.assign({}, e);
  for (let t of n)
    t in s && delete s[t];
  return s;
}
function So(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Ie = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ie || {});
let We = ue({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: s }) {
  return () => {
    var t;
    let { features: l, ...v } = e, u = { "aria-hidden": (l & 2) === 2 ? !0 : (t = v["aria-hidden"]) != null ? t : void 0, hidden: (l & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return Oe({ ourProps: u, theirProps: v, slot: {}, attrs: s, slots: n, name: "Hidden" });
  };
} }), Mt = Symbol("Context");
var Le = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Le || {});
function St() {
  return De(Mt, null);
}
function Do(e) {
  re(Mt, e);
}
var Ve = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ve || {});
function Po(e, n, s, t) {
  nt.isServer || $e((l) => {
    e = e ?? window, e.addEventListener(n, s, t), l(() => e.removeEventListener(n, s, t));
  });
}
var Se = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Se || {});
function Dt() {
  let e = J(0);
  return $t("keydown", (n) => {
    n.key === "Tab" && (e.value = n.shiftKey ? 1 : 0);
  }), e;
}
function Oo({ defaultContainers: e = [], portals: n, mainTreeNodeRef: s } = {}) {
  let t = J(null), l = Ae(t);
  function v() {
    var u, a, g;
    let h = [];
    for (let f of e)
      f !== null && (f instanceof HTMLElement ? h.push(f) : "value" in f && f.value instanceof HTMLElement && h.push(f.value));
    if (n != null && n.value)
      for (let f of n.value)
        h.push(f);
    for (let f of (u = l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? u : [])
      f !== document.body && f !== document.head && f instanceof HTMLElement && f.id !== "headlessui-portal-root" && (f.contains(H(t)) || f.contains((g = (a = H(t)) == null ? void 0 : a.getRootNode()) == null ? void 0 : g.host) || h.some((y) => f.contains(y)) || h.push(f));
    return h;
  }
  return { resolveContainers: v, contains(u) {
    return v().some((a) => a.contains(u));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return s != null ? null : ve(We, { features: Ie.Hidden, ref: t });
  } };
}
function Vo() {
  let e = J(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return ve(We, { features: Ie.Hidden, ref: e });
  } };
}
let Pt = Symbol("ForcePortalRootContext");
function To() {
  return De(Pt, !1);
}
ue({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: s }) {
  return re(Pt, e.force), () => {
    let { force: t, ...l } = e;
    return Oe({ theirProps: l, ourProps: {}, slot: {}, slots: n, attrs: s, name: "ForcePortalRoot" });
  };
} });
function Ao(e) {
  let n = Ae(e);
  if (!n) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let s = n.getElementById("headlessui-portal-root");
  if (s)
    return s;
  let t = n.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(t);
}
const it = /* @__PURE__ */ new WeakMap();
function Co(e) {
  var n;
  return (n = it.get(e)) != null ? n : 0;
}
function yt(e, n) {
  let s = n(Co(e));
  return s <= 0 ? it.delete(e) : it.set(e, s), s;
}
ue({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: s }) {
  let t = J(null), l = le(() => Ae(t)), v = To(), u = De(Ot, null), a = J(v === !0 || u == null ? Ao(t.value) : u.resolveTarget());
  a.value && yt(a.value, (x) => x + 1);
  let g = J(!1);
  ot(() => {
    g.value = !0;
  }), $e(() => {
    v || u != null && (a.value = u.resolveTarget());
  });
  let h = De(dt, null), f = !1, y = oo();
  return lt(t, () => {
    if (f || !h)
      return;
    let x = H(t);
    x && (et(h.register(x), y), f = !0);
  }), et(() => {
    var x, O;
    let N = (x = l.value) == null ? void 0 : x.getElementById("headlessui-portal-root");
    !N || a.value !== N || yt(a.value, (F) => F - 1) || a.value.children.length > 0 || (O = a.value.parentElement) == null || O.removeChild(a.value);
  }), () => {
    if (!g.value || a.value === null)
      return null;
    let x = { ref: t, "data-headlessui-portal": "" };
    return ve(no, { to: a.value }, Oe({ ourProps: x, theirProps: e, slot: {}, attrs: s, slots: n, name: "Portal" }));
  };
} });
let dt = Symbol("PortalParentContext");
function Yo() {
  let e = De(dt, null), n = J([]);
  function s(v) {
    return n.value.push(v), e && e.register(v), () => t(v);
  }
  function t(v) {
    let u = n.value.indexOf(v);
    u !== -1 && n.value.splice(u, 1), e && e.unregister(v);
  }
  let l = { register: s, unregister: t, portals: n };
  return [n, ue({ name: "PortalWrapper", setup(v, { slots: u }) {
    return re(dt, l), () => {
      var a;
      return (a = u.default) == null ? void 0 : a.call(u);
    };
  } })];
}
let Ot = Symbol("PortalGroupContext");
ue({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: s }) {
  let t = xt({ resolveTarget() {
    return e.target;
  } });
  return re(Ot, t), () => {
    let { target: l, ...v } = e;
    return Oe({ theirProps: v, ourProps: {}, slot: {}, attrs: n, slots: s, name: "PortalGroup" });
  };
} });
var Eo = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Eo || {});
let Vt = Symbol("PopoverContext");
function rt(e) {
  let n = De(Vt, null);
  if (n === null) {
    let s = new Error(`<${e} /> is missing a parent <${Yt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s, rt), s;
  }
  return n;
}
let Tt = Symbol("PopoverGroupContext");
function At() {
  return De(Tt, null);
}
let Ct = Symbol("PopoverPanelContext");
function Lo() {
  return De(Ct, null);
}
let Yt = ue({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: s, expose: t }) {
  var l;
  let v = J(null);
  t({ el: v, $el: v });
  let u = J(1), a = J(null), g = J(null), h = J(null), f = J(null), y = le(() => Ae(v)), x = le(() => {
    var w, P;
    if (!H(a) || !H(f))
      return !1;
    for (let Z of document.querySelectorAll("body > *"))
      if (Number(Z == null ? void 0 : Z.contains(H(a))) ^ Number(Z == null ? void 0 : Z.contains(H(f))))
        return !0;
    let r = at(), o = r.indexOf(H(a)), B = (o + r.length - 1) % r.length, E = (o + 1) % r.length, _ = r[B], G = r[E];
    return !((w = H(f)) != null && w.contains(_)) && !((P = H(f)) != null && P.contains(G));
  }), O = { popoverState: u, buttonId: J(null), panelId: J(null), panel: f, button: a, isPortalled: x, beforePanelSentinel: g, afterPanelSentinel: h, togglePopover() {
    u.value = Pe(u.value, { 0: 1, 1: 0 });
  }, closePopover() {
    u.value !== 1 && (u.value = 1);
  }, close(w) {
    O.closePopover();
    let P = (() => w ? w instanceof HTMLElement ? w : w.value instanceof HTMLElement ? H(w) : H(O.button) : H(O.button))();
    P == null || P.focus();
  } };
  re(Vt, O), Do(le(() => Pe(u.value, { 0: Le.Open, 1: Le.Closed })));
  let N = { buttonId: O.buttonId, panelId: O.panelId, close() {
    O.closePopover();
  } }, F = At(), V = F == null ? void 0 : F.registerPopover, [Y, M] = Yo(), j = Oo({ mainTreeNodeRef: F == null ? void 0 : F.mainTreeNodeRef, portals: Y, defaultContainers: [a, f] });
  function D() {
    var w, P, r, o;
    return (o = F == null ? void 0 : F.isFocusWithinPopoverGroup()) != null ? o : ((w = y.value) == null ? void 0 : w.activeElement) && (((P = H(a)) == null ? void 0 : P.contains(y.value.activeElement)) || ((r = H(f)) == null ? void 0 : r.contains(y.value.activeElement)));
  }
  return $e(() => V == null ? void 0 : V(N)), Po((l = y.value) == null ? void 0 : l.defaultView, "focus", (w) => {
    var P, r;
    w.target !== window && w.target instanceof HTMLElement && u.value === 0 && (D() || a && f && (j.contains(w.target) || (P = H(O.beforePanelSentinel)) != null && P.contains(w.target) || (r = H(O.afterPanelSentinel)) != null && r.contains(w.target) || O.closePopover()));
  }, !0), $o(j.resolveContainers, (w, P) => {
    var r;
    O.closePopover(), jt(P, ct.Loose) || (w.preventDefault(), (r = H(a)) == null || r.focus());
  }, le(() => u.value === 0)), () => {
    let w = { open: u.value === 0, close: O.close };
    return ve(ge, [ve(M, {}, () => Oe({ theirProps: { ...e, ...s }, ourProps: { ref: v }, slot: w, slots: n, attrs: s, name: "Popover" })), ve(j.MainTreeNode)]);
  };
} }), Fo = ue({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: s, expose: t }) {
  var l;
  let v = (l = e.id) != null ? l : `headlessui-popover-button-${Re()}`, u = rt("PopoverButton"), a = le(() => Ae(u.button));
  t({ el: u.button, $el: u.button }), ot(() => {
    u.buttonId.value = v;
  }), et(() => {
    u.buttonId.value = null;
  });
  let g = At(), h = g == null ? void 0 : g.closeOthers, f = Lo(), y = le(() => f === null ? !1 : f.value === u.panelId.value), x = J(null), O = `headlessui-focus-sentinel-${Re()}`;
  y.value || $e(() => {
    u.button.value = H(x);
  });
  let N = ko(le(() => ({ as: e.as, type: n.type })), x);
  function F(w) {
    var P, r, o, B, E;
    if (y.value) {
      if (u.popoverState.value === 1)
        return;
      switch (w.key) {
        case Ve.Space:
        case Ve.Enter:
          w.preventDefault(), (r = (P = w.target).click) == null || r.call(P), u.closePopover(), (o = H(u.button)) == null || o.focus();
          break;
      }
    } else
      switch (w.key) {
        case Ve.Space:
        case Ve.Enter:
          w.preventDefault(), w.stopPropagation(), u.popoverState.value === 1 && (h == null || h(u.buttonId.value)), u.togglePopover();
          break;
        case Ve.Escape:
          if (u.popoverState.value !== 0)
            return h == null ? void 0 : h(u.buttonId.value);
          if (!H(u.button) || (B = a.value) != null && B.activeElement && !((E = H(u.button)) != null && E.contains(a.value.activeElement)))
            return;
          w.preventDefault(), w.stopPropagation(), u.closePopover();
          break;
      }
  }
  function V(w) {
    y.value || w.key === Ve.Space && w.preventDefault();
  }
  function Y(w) {
    var P, r;
    e.disabled || (y.value ? (u.closePopover(), (P = H(u.button)) == null || P.focus()) : (w.preventDefault(), w.stopPropagation(), u.popoverState.value === 1 && (h == null || h(u.buttonId.value)), u.togglePopover(), (r = H(u.button)) == null || r.focus()));
  }
  function M(w) {
    w.preventDefault(), w.stopPropagation();
  }
  let j = Dt();
  function D() {
    let w = H(u.panel);
    if (!w)
      return;
    function P() {
      Pe(j.value, { [Se.Forwards]: () => Ee(w, Me.First), [Se.Backwards]: () => Ee(w, Me.Last) }) === tt.Error && Ee(at().filter((r) => r.dataset.headlessuiFocusGuard !== "true"), Pe(j.value, { [Se.Forwards]: Me.Next, [Se.Backwards]: Me.Previous }), { relativeTo: H(u.button) });
    }
    P();
  }
  return () => {
    let w = u.popoverState.value === 0, P = { open: w }, { ...r } = e, o = y.value ? { ref: x, type: N.value, onKeydown: F, onClick: Y } : { ref: x, id: v, type: N.value, "aria-expanded": u.popoverState.value === 0, "aria-controls": H(u.panel) ? u.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: F, onKeyup: V, onClick: Y, onMousedown: M };
    return ve(ge, [Oe({ ourProps: o, theirProps: { ...n, ...r }, slot: P, attrs: n, slots: s, name: "PopoverButton" }), w && !y.value && u.isPortalled.value && ve(We, { id: O, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: D })]);
  };
} }), Bo = ue({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: s }) {
  let t = rt("PopoverOverlay"), l = `headlessui-popover-overlay-${Re()}`, v = St(), u = le(() => v !== null ? (v.value & Le.Open) === Le.Open : t.popoverState.value === 0);
  function a() {
    t.closePopover();
  }
  return () => {
    let g = { open: t.popoverState.value === 0 };
    return Oe({ ourProps: { id: l, "aria-hidden": !0, onClick: a }, theirProps: e, slot: g, attrs: n, slots: s, features: ze.RenderStrategy | ze.Static, visible: u.value, name: "PopoverOverlay" });
  };
} }), No = ue({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: s, expose: t }) {
  var l;
  let v = (l = e.id) != null ? l : `headlessui-popover-panel-${Re()}`, { focus: u } = e, a = rt("PopoverPanel"), g = le(() => Ae(a.panel)), h = `headlessui-focus-sentinel-before-${Re()}`, f = `headlessui-focus-sentinel-after-${Re()}`;
  t({ el: a.panel, $el: a.panel }), ot(() => {
    a.panelId.value = v;
  }), et(() => {
    a.panelId.value = null;
  }), re(Ct, a.panelId), $e(() => {
    var M, j;
    if (!u || a.popoverState.value !== 0 || !a.panel)
      return;
    let D = (M = g.value) == null ? void 0 : M.activeElement;
    (j = H(a.panel)) != null && j.contains(D) || Ee(H(a.panel), Me.First);
  });
  let y = St(), x = le(() => y !== null ? (y.value & Le.Open) === Le.Open : a.popoverState.value === 0);
  function O(M) {
    var j, D;
    switch (M.key) {
      case Ve.Escape:
        if (a.popoverState.value !== 0 || !H(a.panel) || g.value && !((j = H(a.panel)) != null && j.contains(g.value.activeElement)))
          return;
        M.preventDefault(), M.stopPropagation(), a.closePopover(), (D = H(a.button)) == null || D.focus();
        break;
    }
  }
  function N(M) {
    var j, D, w, P, r;
    let o = M.relatedTarget;
    o && H(a.panel) && ((j = H(a.panel)) != null && j.contains(o) || (a.closePopover(), ((w = (D = H(a.beforePanelSentinel)) == null ? void 0 : D.contains) != null && w.call(D, o) || (r = (P = H(a.afterPanelSentinel)) == null ? void 0 : P.contains) != null && r.call(P, o)) && o.focus({ preventScroll: !0 })));
  }
  let F = Dt();
  function V() {
    let M = H(a.panel);
    if (!M)
      return;
    function j() {
      Pe(F.value, { [Se.Forwards]: () => {
        var D;
        Ee(M, Me.First) === tt.Error && ((D = H(a.afterPanelSentinel)) == null || D.focus());
      }, [Se.Backwards]: () => {
        var D;
        (D = H(a.button)) == null || D.focus({ preventScroll: !0 });
      } });
    }
    j();
  }
  function Y() {
    let M = H(a.panel);
    if (!M)
      return;
    function j() {
      Pe(F.value, { [Se.Forwards]: () => {
        let D = H(a.button), w = H(a.panel);
        if (!D)
          return;
        let P = at(), r = P.indexOf(D), o = P.slice(0, r + 1), B = [...P.slice(r + 1), ...o];
        for (let E of B.slice())
          if (E.dataset.headlessuiFocusGuard === "true" || w != null && w.contains(E)) {
            let _ = B.indexOf(E);
            _ !== -1 && B.splice(_, 1);
          }
        Ee(B, Me.First, { sorted: !1 });
      }, [Se.Backwards]: () => {
        var D;
        Ee(M, Me.Previous) === tt.Error && ((D = H(a.button)) == null || D.focus());
      } });
    }
    j();
  }
  return () => {
    let M = { open: a.popoverState.value === 0, close: a.close }, { focus: j, ...D } = e, w = { ref: a.panel, id: v, onKeydown: O, onFocusout: u && a.popoverState.value === 0 ? N : void 0, tabIndex: -1 };
    return Oe({ ourProps: w, theirProps: { ...n, ...D }, attrs: n, slot: M, slots: { ...s, default: (...P) => {
      var r;
      return [ve(ge, [x.value && a.isPortalled.value && ve(We, { id: h, ref: a.beforePanelSentinel, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: V }), (r = s.default) == null ? void 0 : r.call(s, ...P), x.value && a.isPortalled.value && ve(We, { id: f, ref: a.afterPanelSentinel, features: Ie.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: Y })])];
    } }, features: ze.RenderStrategy | ze.Static, visible: x.value, name: "PopoverPanel" });
  };
} });
ue({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: s, expose: t }) {
  let l = J(null), v = ao([]), u = le(() => Ae(l)), a = Vo();
  t({ el: l, $el: l });
  function g(x) {
    let O = v.value.indexOf(x);
    O !== -1 && v.value.splice(O, 1);
  }
  function h(x) {
    return v.value.push(x), () => {
      g(x);
    };
  }
  function f() {
    var x;
    let O = u.value;
    if (!O)
      return !1;
    let N = O.activeElement;
    return (x = H(l)) != null && x.contains(N) ? !0 : v.value.some((F) => {
      var V, Y;
      return ((V = O.getElementById(F.buttonId.value)) == null ? void 0 : V.contains(N)) || ((Y = O.getElementById(F.panelId.value)) == null ? void 0 : Y.contains(N));
    });
  }
  function y(x) {
    for (let O of v.value)
      O.buttonId.value !== x && O.close();
  }
  return re(Tt, { registerPopover: h, unregisterPopover: g, isFocusWithinPopoverGroup: f, closeOthers: y, mainTreeNodeRef: a.mainTreeNodeRef }), () => ve(ge, [Oe({ ourProps: { ref: l }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: s, name: "PopoverGroup" }), ve(a.MainTreeNode)]);
} });
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ye(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Et = { exports: {} };
(function(e, n) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    var s = 1e3, t = 6e4, l = 36e5, v = "millisecond", u = "second", a = "minute", g = "hour", h = "day", f = "week", y = "month", x = "quarter", O = "year", N = "date", F = "Invalid Date", V = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var b = ["th", "st", "nd", "rd"], k = A % 100;
      return "[" + A + (b[(k - 20) % 10] || b[k] || b[0]) + "]";
    } }, j = function(A, b, k) {
      var C = String(A);
      return !C || C.length >= b ? A : "" + Array(b + 1 - C.length).join(k) + A;
    }, D = { s: j, z: function(A) {
      var b = -A.utcOffset(), k = Math.abs(b), C = Math.floor(k / 60), S = k % 60;
      return (b <= 0 ? "+" : "-") + j(C, 2, "0") + ":" + j(S, 2, "0");
    }, m: function A(b, k) {
      if (b.date() < k.date())
        return -A(k, b);
      var C = 12 * (k.year() - b.year()) + (k.month() - b.month()), S = b.clone().add(C, y), I = k - S < 0, R = b.clone().add(C + (I ? -1 : 1), y);
      return +(-(C + (k - S) / (I ? S - R : R - S)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: y, y: O, w: f, d: h, D: N, h: g, m: a, s: u, ms: v, Q: x }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, w = "en", P = {};
    P[w] = M;
    var r = "$isDayjsObject", o = function(A) {
      return A instanceof G || !(!A || !A[r]);
    }, B = function A(b, k, C) {
      var S;
      if (!b)
        return w;
      if (typeof b == "string") {
        var I = b.toLowerCase();
        P[I] && (S = I), k && (P[I] = k, S = I);
        var R = b.split("-");
        if (!S && R.length > 1)
          return A(R[0]);
      } else {
        var U = b.name;
        P[U] = b, S = U;
      }
      return !C && S && (w = S), S || !C && w;
    }, E = function(A, b) {
      if (o(A))
        return A.clone();
      var k = typeof b == "object" ? b : {};
      return k.date = A, k.args = arguments, new G(k);
    }, _ = D;
    _.l = B, _.i = o, _.w = function(A, b) {
      return E(A, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var G = function() {
      function A(k) {
        this.$L = B(k.locale, null, !0), this.parse(k), this.$x = this.$x || k.x || {}, this[r] = !0;
      }
      var b = A.prototype;
      return b.parse = function(k) {
        this.$d = function(C) {
          var S = C.date, I = C.utc;
          if (S === null)
            return /* @__PURE__ */ new Date(NaN);
          if (_.u(S))
            return /* @__PURE__ */ new Date();
          if (S instanceof Date)
            return new Date(S);
          if (typeof S == "string" && !/Z$/i.test(S)) {
            var R = S.match(V);
            if (R) {
              var U = R[2] - 1 || 0, X = (R[7] || "0").substring(0, 3);
              return I ? new Date(Date.UTC(R[1], U, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, X)) : new Date(R[1], U, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, X);
            }
          }
          return new Date(S);
        }(k), this.init();
      }, b.init = function() {
        var k = this.$d;
        this.$y = k.getFullYear(), this.$M = k.getMonth(), this.$D = k.getDate(), this.$W = k.getDay(), this.$H = k.getHours(), this.$m = k.getMinutes(), this.$s = k.getSeconds(), this.$ms = k.getMilliseconds();
      }, b.$utils = function() {
        return _;
      }, b.isValid = function() {
        return this.$d.toString() !== F;
      }, b.isSame = function(k, C) {
        var S = E(k);
        return this.startOf(C) <= S && S <= this.endOf(C);
      }, b.isAfter = function(k, C) {
        return E(k) < this.startOf(C);
      }, b.isBefore = function(k, C) {
        return this.endOf(C) < E(k);
      }, b.$g = function(k, C, S) {
        return _.u(k) ? this[C] : this.set(S, k);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(k, C) {
        var S = this, I = !!_.u(C) || C, R = _.p(k), U = function(ye, ne) {
          var fe = _.w(S.$u ? Date.UTC(S.$y, ne, ye) : new Date(S.$y, ne, ye), S);
          return I ? fe : fe.endOf(h);
        }, X = function(ye, ne) {
          return _.w(S.toDate()[ye].apply(S.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), S);
        }, ee = this.$W, oe = this.$M, ie = this.$D, xe = "set" + (this.$u ? "UTC" : "");
        switch (R) {
          case O:
            return I ? U(1, 0) : U(31, 11);
          case y:
            return I ? U(1, oe) : U(0, oe + 1);
          case f:
            var de = this.$locale().weekStart || 0, ke = (ee < de ? ee + 7 : ee) - de;
            return U(I ? ie - ke : ie + (6 - ke), oe);
          case h:
          case N:
            return X(xe + "Hours", 0);
          case g:
            return X(xe + "Minutes", 1);
          case a:
            return X(xe + "Seconds", 2);
          case u:
            return X(xe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(k) {
        return this.startOf(k, !1);
      }, b.$set = function(k, C) {
        var S, I = _.p(k), R = "set" + (this.$u ? "UTC" : ""), U = (S = {}, S[h] = R + "Date", S[N] = R + "Date", S[y] = R + "Month", S[O] = R + "FullYear", S[g] = R + "Hours", S[a] = R + "Minutes", S[u] = R + "Seconds", S[v] = R + "Milliseconds", S)[I], X = I === h ? this.$D + (C - this.$W) : C;
        if (I === y || I === O) {
          var ee = this.clone().set(N, 1);
          ee.$d[U](X), ee.init(), this.$d = ee.set(N, Math.min(this.$D, ee.daysInMonth())).$d;
        } else
          U && this.$d[U](X);
        return this.init(), this;
      }, b.set = function(k, C) {
        return this.clone().$set(k, C);
      }, b.get = function(k) {
        return this[_.p(k)]();
      }, b.add = function(k, C) {
        var S, I = this;
        k = Number(k);
        var R = _.p(C), U = function(oe) {
          var ie = E(I);
          return _.w(ie.date(ie.date() + Math.round(oe * k)), I);
        };
        if (R === y)
          return this.set(y, this.$M + k);
        if (R === O)
          return this.set(O, this.$y + k);
        if (R === h)
          return U(1);
        if (R === f)
          return U(7);
        var X = (S = {}, S[a] = t, S[g] = l, S[u] = s, S)[R] || 1, ee = this.$d.getTime() + k * X;
        return _.w(ee, this);
      }, b.subtract = function(k, C) {
        return this.add(-1 * k, C);
      }, b.format = function(k) {
        var C = this, S = this.$locale();
        if (!this.isValid())
          return S.invalidDate || F;
        var I = k || "YYYY-MM-DDTHH:mm:ssZ", R = _.z(this), U = this.$H, X = this.$m, ee = this.$M, oe = S.weekdays, ie = S.months, xe = S.meridiem, de = function(ne, fe, be, we) {
          return ne && (ne[fe] || ne(C, I)) || be[fe].slice(0, we);
        }, ke = function(ne) {
          return _.s(U % 12 || 12, ne, "0");
        }, ye = xe || function(ne, fe, be) {
          var we = ne < 12 ? "AM" : "PM";
          return be ? we.toLowerCase() : we;
        };
        return I.replace(Y, function(ne, fe) {
          return fe || function(be) {
            switch (be) {
              case "YY":
                return String(C.$y).slice(-2);
              case "YYYY":
                return _.s(C.$y, 4, "0");
              case "M":
                return ee + 1;
              case "MM":
                return _.s(ee + 1, 2, "0");
              case "MMM":
                return de(S.monthsShort, ee, ie, 3);
              case "MMMM":
                return de(ie, ee);
              case "D":
                return C.$D;
              case "DD":
                return _.s(C.$D, 2, "0");
              case "d":
                return String(C.$W);
              case "dd":
                return de(S.weekdaysMin, C.$W, oe, 2);
              case "ddd":
                return de(S.weekdaysShort, C.$W, oe, 3);
              case "dddd":
                return oe[C.$W];
              case "H":
                return String(U);
              case "HH":
                return _.s(U, 2, "0");
              case "h":
                return ke(1);
              case "hh":
                return ke(2);
              case "a":
                return ye(U, X, !0);
              case "A":
                return ye(U, X, !1);
              case "m":
                return String(X);
              case "mm":
                return _.s(X, 2, "0");
              case "s":
                return String(C.$s);
              case "ss":
                return _.s(C.$s, 2, "0");
              case "SSS":
                return _.s(C.$ms, 3, "0");
              case "Z":
                return R;
            }
            return null;
          }(ne) || R.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(k, C, S) {
        var I, R = this, U = _.p(C), X = E(k), ee = (X.utcOffset() - this.utcOffset()) * t, oe = this - X, ie = function() {
          return _.m(R, X);
        };
        switch (U) {
          case O:
            I = ie() / 12;
            break;
          case y:
            I = ie();
            break;
          case x:
            I = ie() / 3;
            break;
          case f:
            I = (oe - ee) / 6048e5;
            break;
          case h:
            I = (oe - ee) / 864e5;
            break;
          case g:
            I = oe / l;
            break;
          case a:
            I = oe / t;
            break;
          case u:
            I = oe / s;
            break;
          default:
            I = oe;
        }
        return S ? I : _.a(I);
      }, b.daysInMonth = function() {
        return this.endOf(y).$D;
      }, b.$locale = function() {
        return P[this.$L];
      }, b.locale = function(k, C) {
        if (!k)
          return this.$L;
        var S = this.clone(), I = B(k, C, !0);
        return I && (S.$L = I), S;
      }, b.clone = function() {
        return _.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), Z = G.prototype;
    return E.prototype = Z, [["$ms", v], ["$s", u], ["$m", a], ["$H", g], ["$W", h], ["$M", y], ["$y", O], ["$D", N]].forEach(function(A) {
      Z[A[1]] = function(b) {
        return this.$g(b, A[0], A[1]);
      };
    }), E.extend = function(A, b) {
      return A.$i || (A(b, G, E), A.$i = !0), E;
    }, E.locale = B, E.isDayjs = o, E.unix = function(A) {
      return E(1e3 * A);
    }, E.en = P[w], E.Ls = P, E.p = {}, E;
  });
})(Et);
var Ro = Et.exports;
const d = /* @__PURE__ */ Ye(Ro);
var Lt = { exports: {} };
(function(e, n) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    return function(s, t, l) {
      var v = t.prototype, u = function(y) {
        return y && (y.indexOf ? y : y.s);
      }, a = function(y, x, O, N, F) {
        var V = y.name ? y : y.$locale(), Y = u(V[x]), M = u(V[O]), j = Y || M.map(function(w) {
          return w.slice(0, N);
        });
        if (!F)
          return j;
        var D = V.weekStart;
        return j.map(function(w, P) {
          return j[(P + (D || 0)) % 7];
        });
      }, g = function() {
        return l.Ls[l.locale()];
      }, h = function(y, x) {
        return y.formats[x] || function(O) {
          return O.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(N, F, V) {
            return F || V.slice(1);
          });
        }(y.formats[x.toUpperCase()]);
      }, f = function() {
        var y = this;
        return { months: function(x) {
          return x ? x.format("MMMM") : a(y, "months");
        }, monthsShort: function(x) {
          return x ? x.format("MMM") : a(y, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return y.$locale().weekStart || 0;
        }, weekdays: function(x) {
          return x ? x.format("dddd") : a(y, "weekdays");
        }, weekdaysMin: function(x) {
          return x ? x.format("dd") : a(y, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(x) {
          return x ? x.format("ddd") : a(y, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(x) {
          return h(y.$locale(), x);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      v.localeData = function() {
        return f.bind(this)();
      }, l.localeData = function() {
        var y = g();
        return { firstDayOfWeek: function() {
          return y.weekStart || 0;
        }, weekdays: function() {
          return l.weekdays();
        }, weekdaysShort: function() {
          return l.weekdaysShort();
        }, weekdaysMin: function() {
          return l.weekdaysMin();
        }, months: function() {
          return l.months();
        }, monthsShort: function() {
          return l.monthsShort();
        }, longDateFormat: function(x) {
          return h(y, x);
        }, meridiem: y.meridiem, ordinal: y.ordinal };
      }, l.months = function() {
        return a(g(), "months");
      }, l.monthsShort = function() {
        return a(g(), "monthsShort", "months", 3);
      }, l.weekdays = function(y) {
        return a(g(), "weekdays", null, null, y);
      }, l.weekdaysShort = function(y) {
        return a(g(), "weekdaysShort", "weekdays", 3, y);
      }, l.weekdaysMin = function(y) {
        return a(g(), "weekdaysMin", "weekdays", 2, y);
      };
    };
  });
})(Lt);
var Io = Lt.exports;
const Ho = /* @__PURE__ */ Ye(Io);
var Ft = { exports: {} };
(function(e, n) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    var s = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, l, v) {
      var u = l.prototype, a = u.format;
      v.en.formats = s, u.format = function(g) {
        g === void 0 && (g = "YYYY-MM-DDTHH:mm:ssZ");
        var h = this.$locale().formats, f = function(y, x) {
          return y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, N, F) {
            var V = F && F.toUpperCase();
            return N || x[F] || s[F] || x[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(Y, M, j) {
              return M || j.slice(1);
            });
          });
        }(g, h === void 0 ? {} : h);
        return a.call(this, f);
      };
    };
  });
})(Ft);
var Uo = Ft.exports;
const zo = /* @__PURE__ */ Ye(Uo);
var Bt = { exports: {} };
(function(e, n) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    var s = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d/, v = /\d\d/, u = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, g = {}, h = function(V) {
      return (V = +V) + (V > 68 ? 1900 : 2e3);
    }, f = function(V) {
      return function(Y) {
        this[V] = +Y;
      };
    }, y = [/[+-]\d\d:?(\d\d)?|Z/, function(V) {
      (this.zone || (this.zone = {})).offset = function(Y) {
        if (!Y || Y === "Z")
          return 0;
        var M = Y.match(/([+-]|\d\d)/g), j = 60 * M[1] + (+M[2] || 0);
        return j === 0 ? 0 : M[0] === "+" ? -j : j;
      }(V);
    }], x = function(V) {
      var Y = g[V];
      return Y && (Y.indexOf ? Y : Y.s.concat(Y.f));
    }, O = function(V, Y) {
      var M, j = g.meridiem;
      if (j) {
        for (var D = 1; D <= 24; D += 1)
          if (V.indexOf(j(D, 0, Y)) > -1) {
            M = D > 12;
            break;
          }
      } else
        M = V === (Y ? "pm" : "PM");
      return M;
    }, N = { A: [a, function(V) {
      this.afternoon = O(V, !1);
    }], a: [a, function(V) {
      this.afternoon = O(V, !0);
    }], Q: [l, function(V) {
      this.month = 3 * (V - 1) + 1;
    }], S: [l, function(V) {
      this.milliseconds = 100 * +V;
    }], SS: [v, function(V) {
      this.milliseconds = 10 * +V;
    }], SSS: [/\d{3}/, function(V) {
      this.milliseconds = +V;
    }], s: [u, f("seconds")], ss: [u, f("seconds")], m: [u, f("minutes")], mm: [u, f("minutes")], H: [u, f("hours")], h: [u, f("hours")], HH: [u, f("hours")], hh: [u, f("hours")], D: [u, f("day")], DD: [v, f("day")], Do: [a, function(V) {
      var Y = g.ordinal, M = V.match(/\d+/);
      if (this.day = M[0], Y)
        for (var j = 1; j <= 31; j += 1)
          Y(j).replace(/\[|\]/g, "") === V && (this.day = j);
    }], w: [u, f("week")], ww: [v, f("week")], M: [u, f("month")], MM: [v, f("month")], MMM: [a, function(V) {
      var Y = x("months"), M = (x("monthsShort") || Y.map(function(j) {
        return j.slice(0, 3);
      })).indexOf(V) + 1;
      if (M < 1)
        throw new Error();
      this.month = M % 12 || M;
    }], MMMM: [a, function(V) {
      var Y = x("months").indexOf(V) + 1;
      if (Y < 1)
        throw new Error();
      this.month = Y % 12 || Y;
    }], Y: [/[+-]?\d+/, f("year")], YY: [v, function(V) {
      this.year = h(V);
    }], YYYY: [/\d{4}/, f("year")], Z: y, ZZ: y };
    function F(V) {
      var Y, M;
      Y = V, M = g && g.formats;
      for (var j = (V = Y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(E, _, G) {
        var Z = G && G.toUpperCase();
        return _ || M[G] || s[G] || M[Z].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(A, b, k) {
          return b || k.slice(1);
        });
      })).match(t), D = j.length, w = 0; w < D; w += 1) {
        var P = j[w], r = N[P], o = r && r[0], B = r && r[1];
        j[w] = B ? { regex: o, parser: B } : P.replace(/^\[|\]$/g, "");
      }
      return function(E) {
        for (var _ = {}, G = 0, Z = 0; G < D; G += 1) {
          var A = j[G];
          if (typeof A == "string")
            Z += A.length;
          else {
            var b = A.regex, k = A.parser, C = E.slice(Z), S = b.exec(C)[0];
            k.call(_, S), E = E.replace(S, "");
          }
        }
        return function(I) {
          var R = I.afternoon;
          if (R !== void 0) {
            var U = I.hours;
            R ? U < 12 && (I.hours += 12) : U === 12 && (I.hours = 0), delete I.afternoon;
          }
        }(_), _;
      };
    }
    return function(V, Y, M) {
      M.p.customParseFormat = !0, V && V.parseTwoDigitYear && (h = V.parseTwoDigitYear);
      var j = Y.prototype, D = j.parse;
      j.parse = function(w) {
        var P = w.date, r = w.utc, o = w.args;
        this.$u = r;
        var B = o[1];
        if (typeof B == "string") {
          var E = o[2] === !0, _ = o[3] === !0, G = E || _, Z = o[2];
          _ && (Z = o[2]), g = this.$locale(), !E && Z && (g = M.Ls[Z]), this.$d = function(C, S, I, R) {
            try {
              if (["x", "X"].indexOf(S) > -1)
                return new Date((S === "X" ? 1e3 : 1) * C);
              var U = F(S)(C), X = U.year, ee = U.month, oe = U.day, ie = U.hours, xe = U.minutes, de = U.seconds, ke = U.milliseconds, ye = U.zone, ne = U.week, fe = /* @__PURE__ */ new Date(), be = oe || (X || ee ? 1 : fe.getDate()), we = X || fe.getFullYear(), Fe = 0;
              X && !ee || (Fe = ee > 0 ? ee - 1 : fe.getMonth());
              var Be, p = ie || 0, c = xe || 0, m = de || 0, i = ke || 0;
              return ye ? new Date(Date.UTC(we, Fe, be, p, c, m, i + 60 * ye.offset * 1e3)) : I ? new Date(Date.UTC(we, Fe, be, p, c, m, i)) : (Be = new Date(we, Fe, be, p, c, m, i), ne && (Be = R(Be).week(ne).toDate()), Be);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(P, B, r, M), this.init(), Z && Z !== !0 && (this.$L = this.locale(Z).$L), G && P != this.format(B) && (this.$d = /* @__PURE__ */ new Date("")), g = {};
        } else if (B instanceof Array)
          for (var A = B.length, b = 1; b <= A; b += 1) {
            o[1] = B[b - 1];
            var k = M.apply(this, o);
            if (k.isValid()) {
              this.$d = k.$d, this.$L = k.$L, this.init();
              break;
            }
            b === A && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          D.call(this, w);
      };
    };
  });
})(Bt);
var Wo = Bt.exports;
const Ko = /* @__PURE__ */ Ye(Wo);
var Nt = { exports: {} };
(function(e, n) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    return function(s, t, l) {
      t.prototype.isToday = function() {
        var v = "YYYY-MM-DD", u = l();
        return this.format(v) === u.format(v);
      };
    };
  });
})(Nt);
var Go = Nt.exports;
const Zo = /* @__PURE__ */ Ye(Go);
var Rt = { exports: {} };
(function(e, n) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    return function(s, t, l) {
      t.prototype.isBetween = function(v, u, a, g) {
        var h = l(v), f = l(u), y = (g = g || "()")[0] === "(", x = g[1] === ")";
        return (y ? this.isAfter(h, a) : !this.isBefore(h, a)) && (x ? this.isBefore(f, a) : !this.isAfter(f, a)) || (y ? this.isBefore(h, a) : !this.isAfter(h, a)) && (x ? this.isAfter(f, a) : !this.isBefore(f, a));
      };
    };
  });
})(Rt);
var qo = Rt.exports;
const Jo = /* @__PURE__ */ Ye(qo);
var It = { exports: {} };
(function(e, n) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    var s, t, l = 1e3, v = 6e4, u = 36e5, a = 864e5, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, h = 31536e6, f = 2628e6, y = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, x = { years: h, months: f, days: a, hours: u, minutes: v, seconds: l, milliseconds: 1, weeks: 6048e5 }, O = function(P) {
      return P instanceof D;
    }, N = function(P, r, o) {
      return new D(P, o, r.$l);
    }, F = function(P) {
      return t.p(P) + "s";
    }, V = function(P) {
      return P < 0;
    }, Y = function(P) {
      return V(P) ? Math.ceil(P) : Math.floor(P);
    }, M = function(P) {
      return Math.abs(P);
    }, j = function(P, r) {
      return P ? V(P) ? { negative: !0, format: "" + M(P) + r } : { negative: !1, format: "" + P + r } : { negative: !1, format: "" };
    }, D = function() {
      function P(o, B, E) {
        var _ = this;
        if (this.$d = {}, this.$l = E, o === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), B)
          return N(o * x[F(B)], this);
        if (typeof o == "number")
          return this.$ms = o, this.parseFromMilliseconds(), this;
        if (typeof o == "object")
          return Object.keys(o).forEach(function(A) {
            _.$d[F(A)] = o[A];
          }), this.calMilliseconds(), this;
        if (typeof o == "string") {
          var G = o.match(y);
          if (G) {
            var Z = G.slice(2).map(function(A) {
              return A != null ? Number(A) : 0;
            });
            return this.$d.years = Z[0], this.$d.months = Z[1], this.$d.weeks = Z[2], this.$d.days = Z[3], this.$d.hours = Z[4], this.$d.minutes = Z[5], this.$d.seconds = Z[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var r = P.prototype;
      return r.calMilliseconds = function() {
        var o = this;
        this.$ms = Object.keys(this.$d).reduce(function(B, E) {
          return B + (o.$d[E] || 0) * x[E];
        }, 0);
      }, r.parseFromMilliseconds = function() {
        var o = this.$ms;
        this.$d.years = Y(o / h), o %= h, this.$d.months = Y(o / f), o %= f, this.$d.days = Y(o / a), o %= a, this.$d.hours = Y(o / u), o %= u, this.$d.minutes = Y(o / v), o %= v, this.$d.seconds = Y(o / l), o %= l, this.$d.milliseconds = o;
      }, r.toISOString = function() {
        var o = j(this.$d.years, "Y"), B = j(this.$d.months, "M"), E = +this.$d.days || 0;
        this.$d.weeks && (E += 7 * this.$d.weeks);
        var _ = j(E, "D"), G = j(this.$d.hours, "H"), Z = j(this.$d.minutes, "M"), A = this.$d.seconds || 0;
        this.$d.milliseconds && (A += this.$d.milliseconds / 1e3, A = Math.round(1e3 * A) / 1e3);
        var b = j(A, "S"), k = o.negative || B.negative || _.negative || G.negative || Z.negative || b.negative, C = G.format || Z.format || b.format ? "T" : "", S = (k ? "-" : "") + "P" + o.format + B.format + _.format + C + G.format + Z.format + b.format;
        return S === "P" || S === "-P" ? "P0D" : S;
      }, r.toJSON = function() {
        return this.toISOString();
      }, r.format = function(o) {
        var B = o || "YYYY-MM-DDTHH:mm:ss", E = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return B.replace(g, function(_, G) {
          return G || String(E[_]);
        });
      }, r.as = function(o) {
        return this.$ms / x[F(o)];
      }, r.get = function(o) {
        var B = this.$ms, E = F(o);
        return E === "milliseconds" ? B %= 1e3 : B = E === "weeks" ? Y(B / x[E]) : this.$d[E], B || 0;
      }, r.add = function(o, B, E) {
        var _;
        return _ = B ? o * x[F(B)] : O(o) ? o.$ms : N(o, this).$ms, N(this.$ms + _ * (E ? -1 : 1), this);
      }, r.subtract = function(o, B) {
        return this.add(o, B, !0);
      }, r.locale = function(o) {
        var B = this.clone();
        return B.$l = o, B;
      }, r.clone = function() {
        return N(this.$ms, this);
      }, r.humanize = function(o) {
        return s().add(this.$ms, "ms").locale(this.$l).fromNow(!o);
      }, r.valueOf = function() {
        return this.asMilliseconds();
      }, r.milliseconds = function() {
        return this.get("milliseconds");
      }, r.asMilliseconds = function() {
        return this.as("milliseconds");
      }, r.seconds = function() {
        return this.get("seconds");
      }, r.asSeconds = function() {
        return this.as("seconds");
      }, r.minutes = function() {
        return this.get("minutes");
      }, r.asMinutes = function() {
        return this.as("minutes");
      }, r.hours = function() {
        return this.get("hours");
      }, r.asHours = function() {
        return this.as("hours");
      }, r.days = function() {
        return this.get("days");
      }, r.asDays = function() {
        return this.as("days");
      }, r.weeks = function() {
        return this.get("weeks");
      }, r.asWeeks = function() {
        return this.as("weeks");
      }, r.months = function() {
        return this.get("months");
      }, r.asMonths = function() {
        return this.as("months");
      }, r.years = function() {
        return this.get("years");
      }, r.asYears = function() {
        return this.as("years");
      }, P;
    }(), w = function(P, r, o) {
      return P.add(r.years() * o, "y").add(r.months() * o, "M").add(r.days() * o, "d").add(r.hours() * o, "h").add(r.minutes() * o, "m").add(r.seconds() * o, "s").add(r.milliseconds() * o, "ms");
    };
    return function(P, r, o) {
      s = o, t = o().$utils(), o.duration = function(_, G) {
        var Z = o.locale();
        return N(_, { $l: Z }, G);
      }, o.isDuration = O;
      var B = r.prototype.add, E = r.prototype.subtract;
      r.prototype.add = function(_, G) {
        return O(_) ? w(this, _, 1) : B.bind(this)(_, G);
      }, r.prototype.subtract = function(_, G) {
        return O(_) ? w(this, _, -1) : E.bind(this)(_, G);
      };
    };
  });
})(It);
var Xo = It.exports;
const Qo = /* @__PURE__ */ Ye(Xo);
var Ht = { exports: {} };
(function(e, n) {
  (function(s, t) {
    e.exports = t();
  })(Ce, function() {
    var s = "week", t = "year";
    return function(l, v, u) {
      var a = v.prototype;
      a.week = function(g) {
        if (g === void 0 && (g = null), g !== null)
          return this.add(7 * (g - this.week()), "day");
        var h = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var f = u(this).startOf(t).add(1, t).date(h), y = u(this).endOf(s);
          if (f.isBefore(y))
            return 1;
        }
        var x = u(this).startOf(t).date(h).startOf(s).subtract(1, "millisecond"), O = this.diff(x, s, !0);
        return O < 0 ? u(this).startOf("week").week() : Math.ceil(O);
      }, a.weeks = function(g) {
        return g === void 0 && (g = null), this.week(g);
      };
    };
  });
})(Ht);
var en = Ht.exports;
const tn = /* @__PURE__ */ Ye(en);
function je(e, n) {
  const s = De(e, n);
  if (!s)
    throw new Error(`Could not resolve ${e.description}`);
  return s;
}
const bt = Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({ "../node_modules/dayjs/esm/locale/af.js": () => import("./af-3f5e3754.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/am.js": () => import("./am-bc833d79.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-dz.js": () => import("./ar-dz-2b677c27.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-iq.js": () => import("./ar-iq-9280b179.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-kw.js": () => import("./ar-kw-06673fb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ly.js": () => import("./ar-ly-b364c556.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-ma.js": () => import("./ar-ma-e9b96f88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-sa.js": () => import("./ar-sa-920b6966.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar-tn.js": () => import("./ar-tn-5d2ebe87.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ar.js": () => import("./ar-a3aa818f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/az.js": () => import("./az-659b56f9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/be.js": () => import("./be-3b4f9783.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bg.js": () => import("./bg-406145d9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bi.js": () => import("./bi-951682c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bm.js": () => import("./bm-9d7e855b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn-bd.js": () => import("./bn-bd-087a7a1c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bn.js": () => import("./bn-0c0acd44.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bo.js": () => import("./bo-19632568.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/br.js": () => import("./br-5a3443b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/bs.js": () => import("./bs-ad641200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ca.js": () => import("./ca-035ea682.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cs.js": () => import("./cs-debeec9e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cv.js": () => import("./cv-dcf48c54.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/cy.js": () => import("./cy-daa2e33d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/da.js": () => import("./da-3c1144ee.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-at.js": () => import("./de-at-5acf665a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de-ch.js": () => import("./de-ch-6b981a67.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/de.js": () => import("./de-77586bc3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/dv.js": () => import("./dv-65849a7f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/el.js": () => import("./el-ae4ad393.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-au.js": () => import("./en-au-8c36e702.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ca.js": () => import("./en-ca-c5437740.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-gb.js": () => import("./en-gb-c2cc134a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-ie.js": () => import("./en-ie-d3ac9ac2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-il.js": () => import("./en-il-6dd24280.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-in.js": () => import("./en-in-2f2879f3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-nz.js": () => import("./en-nz-c996ce95.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-sg.js": () => import("./en-sg-278f7244.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en-tt.js": () => import("./en-tt-dcca6678.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/en.js": () => import("./en-4402d6fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eo.js": () => import("./eo-2b962c7e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-do.js": () => import("./es-do-e5ec18dc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-mx.js": () => import("./es-mx-0b0fdda9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-pr.js": () => import("./es-pr-ecf92870.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es-us.js": () => import("./es-us-9a974819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/es.js": () => import("./es-542d397d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/et.js": () => import("./et-cc745c6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/eu.js": () => import("./eu-1819a0bf.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fa.js": () => import("./fa-759da5ca.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fi.js": () => import("./fi-48c34162.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fo.js": () => import("./fo-1a56e22a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ca.js": () => import("./fr-ca-a08d1ab6.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr-ch.js": () => import("./fr-ch-9e54ac3f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fr.js": () => import("./fr-34da226b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/fy.js": () => import("./fy-32e86ec3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ga.js": () => import("./ga-5443425a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gd.js": () => import("./gd-525324a8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gl.js": () => import("./gl-ecd4c576.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gom-latn.js": () => import("./gom-latn-0de894a4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/gu.js": () => import("./gu-f8a9ff06.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/he.js": () => import("./he-c3d5738f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hi.js": () => import("./hi-06d9d378.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hr.js": () => import("./hr-df6e22c2.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ht.js": () => import("./ht-560ce1fa.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hu.js": () => import("./hu-36659a19.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/hy-am.js": () => import("./hy-am-ec1e6b6f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/id.js": () => import("./id-e83ede43.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/is.js": () => import("./is-112d618e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it-ch.js": () => import("./it-ch-74dc20fb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/it.js": () => import("./it-a9bef34d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ja.js": () => import("./ja-81ac0bce.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/jv.js": () => import("./jv-eb80b191.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ka.js": () => import("./ka-408178cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kk.js": () => import("./kk-7182d80c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/km.js": () => import("./km-c8d90f37.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/kn.js": () => import("./kn-1ef13da8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ko.js": () => import("./ko-d74dbac1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ku.js": () => import("./ku-217c312b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ky.js": () => import("./ky-9beeab3e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lb.js": () => import("./lb-bbb0769c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lo.js": () => import("./lo-c0a222fc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lt.js": () => import("./lt-7733040c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/lv.js": () => import("./lv-8456bf8c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/me.js": () => import("./me-60049fb4.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mi.js": () => import("./mi-a00211ea.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mk.js": () => import("./mk-750f2eb3.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ml.js": () => import("./ml-3d864495.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mn.js": () => import("./mn-c3b569a5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mr.js": () => import("./mr-caa70638.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms-my.js": () => import("./ms-my-9edfd210.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ms.js": () => import("./ms-8a0b04c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/mt.js": () => import("./mt-5924bb24.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/my.js": () => import("./my-7ec0e79b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nb.js": () => import("./nb-55474232.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ne.js": () => import("./ne-28b71d4d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl-be.js": () => import("./nl-be-ab2f9375.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nl.js": () => import("./nl-f2df7562.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/nn.js": () => import("./nn-ae0c69b8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/oc-lnc.js": () => import("./oc-lnc-e86add7d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pa-in.js": () => import("./pa-in-58db4e88.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pl.js": () => import("./pl-6123f464.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt-br.js": () => import("./pt-br-72da3648.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/pt.js": () => import("./pt-6d21f766.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rn.js": () => import("./rn-fe91690b.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ro.js": () => import("./ro-f0333df1.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ru.js": () => import("./ru-8092165f.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/rw.js": () => import("./rw-8e49f17e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sd.js": () => import("./sd-f5f464cc.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/se.js": () => import("./se-d0247819.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/si.js": () => import("./si-23229411.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sk.js": () => import("./sk-2ae651e5.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sl.js": () => import("./sl-d651cb86.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sq.js": () => import("./sq-851e451a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr-cyrl.js": () => import("./sr-cyrl-150c337e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sr.js": () => import("./sr-26ffbdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ss.js": () => import("./ss-70c27ddd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv-fi.js": () => import("./sv-fi-53a8b8bd.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sv.js": () => import("./sv-bf43bdc9.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/sw.js": () => import("./sw-3c86b419.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ta.js": () => import("./ta-dde447c0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/te.js": () => import("./te-d039e67a.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tet.js": () => import("./tet-2478e8c8.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tg.js": () => import("./tg-374d7196.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/th.js": () => import("./th-cfb73f82.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tk.js": () => import("./tk-6502e590.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tl-ph.js": () => import("./tl-ph-f36e80af.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tlh.js": () => import("./tlh-6d81a812.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tr.js": () => import("./tr-1608d107.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzl.js": () => import("./tzl-e019f0a0.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm-latn.js": () => import("./tzm-latn-4a3fedcb.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/tzm.js": () => import("./tzm-9a26d476.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ug-cn.js": () => import("./ug-cn-7370b4b7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uk.js": () => import("./uk-f2be452c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/ur.js": () => import("./ur-5e01f781.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz-latn.js": () => import("./uz-latn-ec9b852e.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/uz.js": () => import("./uz-f44d7936.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/vi.js": () => import("./vi-8106a30d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/x-pseudo.js": () => import("./x-pseudo-20ac0200.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/yo.js": () => import("./yo-45cb4db7.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-cn.js": () => import("./zh-cn-7af2941c.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-hk.js": () => import("./zh-hk-e8e3af02.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh-tw.js": () => import("./zh-tw-58dac95d.js").then((e) => e.default), "../node_modules/dayjs/esm/locale/zh.js": () => import("./zh-26803c4f.js").then((e) => e.default) })).map(
    ([e, n]) => {
      var s;
      return [(s = e.match(/([\w-]*)\.js$/)) == null ? void 0 : s[1], n];
    }
  )
), on = { class: "flex justify-between items-center px-2 py-1.5" }, nn = { class: "shrink-0" }, an = { class: "inline-flex rounded-full" }, rn = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, sn = ["d"], ln = { class: "px-1.5 space-x-1.5 flex flex-1" }, un = { class: "flex-1 flex rounded-md" }, dn = ["textContent"], cn = { class: "flex-1 flex rounded-md" }, mn = ["textContent"], fn = { class: "shrink-0" }, pn = { class: "inline-flex rounded-full" }, vn = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, hn = ["d"], Ze = /* @__PURE__ */ ue({
  __name: "Header",
  props: {
    panel: {},
    calendar: {}
  },
  setup(e) {
    return (n, s) => (W(), q("div", on, [
      T("div", nn, [
        me(T("span", an, [
          T("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring-3 focus:ring-vtd-primary-500/10 focus:outline-hidden/50",
            onClick: s[0] || (s[0] = (t) => n.panel.calendar ? n.calendar.onPrevious() : n.calendar.onPreviousYear())
          }, [
            (W(), q("svg", rn, [
              T("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: n.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, sn)
            ]))
          ])
        ], 512), [
          [pe, n.panel.calendar || n.panel.year]
        ])
      ]),
      T("div", ln, [
        T("span", un, [
          T("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring-3 focus:ring-vtd-primary-500/10 focus:outline-hidden uppercase/50",
            onClick: s[1] || (s[1] = (t) => n.calendar.openMonth()),
            textContent: ae(n.calendar.month)
          }, null, 8, dn)
        ]),
        T("span", cn, [
          T("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring-3 focus:ring-vtd-primary-500/10 focus:outline-hidden uppercase/50",
            onClick: s[2] || (s[2] = (t) => n.calendar.openYear()),
            textContent: ae(n.calendar.year)
          }, null, 8, mn)
        ])
      ]),
      T("div", fn, [
        me(T("span", pn, [
          T("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring-3 focus:ring-vtd-primary-500/10 focus:outline-hidden/50",
            onClick: s[3] || (s[3] = (t) => n.panel.calendar ? n.calendar.onNext() : n.calendar.onNextYear())
          }, [
            (W(), q("svg", vn, [
              T("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: n.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, hn)
            ]))
          ])
        ], 512), [
          [pe, n.panel.calendar || n.panel.year]
        ])
      ])
    ]));
  }
}), Ut = Symbol("isBetweenRange"), zt = Symbol(
  "betweenRangeClasses"
), Wt = Symbol("datepickerClasses"), Kt = Symbol("atMouseOver"), Gt = Symbol("setToToday"), Zt = Symbol("setToYesterday"), qt = Symbol("setToLastDay"), Jt = Symbol("setToThisMonth"), Xt = Symbol("setToLastMonth"), Qt = Symbol("setToCustomShortcut"), yn = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/10 order-last sm:order-0 sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0 sm:w-auto"
}, bn = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, gn = ["onClick", "textContent"], xn = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, gt = /* @__PURE__ */ ue({
  __name: "Shortcut",
  props: {
    shortcuts: { type: [Boolean, Function] },
    close: { type: Function },
    asRange: { type: Boolean },
    asSingle: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const n = e, s = je(Gt), t = je(Zt), l = je(qt), v = je(Jt), u = je(Xt), a = je(Qt), g = le(() => typeof n.shortcuts == "function" ? n.shortcuts() : !1);
    return (h, f) => n.asRange && n.asSingle || n.asRange && !n.asSingle ? (W(), q("div", yn, [
      g.value ? (W(), q("ol", bn, [
        (W(!0), q(ge, null, Ke(g.value, (y, x) => (W(), q("li", { key: x }, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded-sm text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600",
            onClick: _e((O) => se(a)(y, h.close), ["prevent"]),
            textContent: ae(y.label)
          }, null, 8, gn)
        ]))), 128))
      ])) : (W(), q("ol", xn, [
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded-sm text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600",
            onClick: f[0] || (f[0] = _e((y) => se(s)(h.close), ["prevent"]))
          }, ae(n.i18n.today), 1)
        ]),
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded-sm text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600",
            onClick: f[1] || (f[1] = _e((y) => se(t)(h.close), ["prevent"]))
          }, ae(n.i18n.yesterday), 1)
        ]),
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded-sm text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600",
            onClick: f[2] || (f[2] = _e((y) => se(l)(7, h.close), ["prevent"]))
          }, ae(n.i18n.past(7)), 1)
        ]),
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded-sm text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600",
            onClick: f[3] || (f[3] = _e((y) => se(l)(30, h.close), ["prevent"]))
          }, ae(n.i18n.past(30)), 1)
        ]),
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded-sm text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600",
            onClick: f[4] || (f[4] = _e((y) => se(v)(h.close), ["prevent"]))
          }, ae(n.i18n.currentMonth), 1)
        ]),
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded-sm text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600",
            onClick: f[5] || (f[5] = _e((y) => se(u)(h.close), ["prevent"]))
          }, ae(n.i18n.pastMonth), 1)
        ])
      ]))
    ])) : he("", !0);
  }
}), wn = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, jn = {
  key: 0,
  class: "col-span-7 border-b relative"
}, $n = { class: "absolute -left-2 top-1/2 -translate-y-2/4 bg-white text-[8px] pr-2 text-vtd-secondary-400" }, kn = ["data-tooltip"], _n = ["disabled", "data-date", "onClick", "onMouseenter", "onFocusin", "textContent"], qe = /* @__PURE__ */ ue({
  __name: "Calendar",
  props: {
    calendar: {},
    weeks: {},
    weekNumber: { type: Boolean },
    asRange: { type: Boolean }
  },
  emits: ["updateDate"],
  setup(e, { emit: n }) {
    const s = n, t = je(Ut), l = je(zt), v = je(Wt), u = je(Kt);
    return (a, g) => (W(), q("div", wn, [
      te(ro, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Ne(() => [
          (W(!0), q(ge, null, Ke(a.calendar.date(), (h, f) => (W(), q(ge, { key: f }, [
            f % 7 === 0 && a.weekNumber ? (W(), q("div", jn, [
              T("span", $n, ae(h.week()), 1)
            ])) : he("", !0),
            T("div", {
              class: Te(["relative", { "vtd-tooltip": a.asRange && h.duration() }]),
              "data-tooltip": `${h.duration()}`
            }, [
              te(wt, {
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "enter-active-class": "transition-opacity ease-out duration-200",
                "leave-active-class": "transition-opacity ease-in duration-150",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: Ne(() => [
                  se(t)(h) || h.hovered() ? (W(), q("span", {
                    key: 0,
                    class: Te(["absolute bg-vtd-primary-100 bg-opacity-60/50", se(l)(h)])
                  }, null, 2)) : he("", !0)
                ]),
                _: 2
              }, 1024),
              T("button", {
                type: "button",
                class: Te(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [
                  se(v)(h),
                  a.asRange ? "transition-all" : "transition-colors"
                ]]),
                disabled: h.disabled || h.inRange(),
                "data-date": h.toDate(),
                onClick: (y) => s("updateDate", h),
                onMouseenter: (y) => se(u)(h),
                onFocusin: (y) => se(u)(h),
                textContent: ae(h.date())
              }, null, 42, _n)
            ], 10, kn)
          ], 64))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), Mn = { class: "flex flex-wrap" }, Sn = { class: "flex rounded-md mt-1.5" }, Dn = ["onClick", "textContent"], Je = /* @__PURE__ */ ue({
  __name: "Year",
  props: {
    years: {}
  },
  emits: ["updateYear"],
  setup(e, { emit: n }) {
    const s = n;
    return (t, l) => (W(), q("div", Mn, [
      (W(!0), q(ge, null, Ke(t.years, (v, u) => (W(), q("div", {
        key: u,
        class: "w-1/2 px-0.5"
      }, [
        T("span", Sn, [
          T("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring-3 focus:ring-vtd-primary-500/10 focus:outline-hidden uppercase",
            onClick: (a) => s("updateYear", v),
            textContent: ae(v)
          }, null, 8, Dn)
        ])
      ]))), 128))
    ]));
  }
}), Pn = { class: "grid grid-cols-7 py-2 mt-0.5" }, On = ["textContent"], Xe = /* @__PURE__ */ ue({
  __name: "Week",
  props: {
    weeks: {}
  },
  setup(e) {
    return (n, s) => (W(), q("div", Pn, [
      (W(!0), q(ge, null, Ke(n.weeks, (t, l) => (W(), q("div", {
        key: l,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default"
      }, [
        T("span", {
          textContent: ae(t)
        }, null, 8, On)
      ]))), 128))
    ]));
  }
}), Vn = { class: "flex flex-wrap mt-1.5" }, Tn = { class: "flex rounded-md mt-1.5" }, An = ["onClick", "textContent"], Qe = /* @__PURE__ */ ue({
  __name: "Month",
  props: {
    months: {}
  },
  emits: ["updateMonth"],
  setup(e, { emit: n }) {
    const s = n;
    return (t, l) => (W(), q("div", Vn, [
      (W(!0), q(ge, null, Ke(t.months, (v, u) => (W(), q("div", {
        key: u,
        class: "w-1/2 px-0.5"
      }, [
        T("span", Tn, [
          T("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring-3 focus:ring-vtd-primary-500/10 focus:outline-hidden uppercase",
            onClick: (a) => s("updateMonth", u),
            textContent: ae(v)
          }, null, 8, An)
        ])
      ]))), 128))
    ]));
  }
});
function Cn() {
  const e = (a) => {
    const g = [], h = a.localeData().firstDayOfWeek();
    for (let f = 0; f <= a.date(0 - h).day(); f++)
      g.push(a.date(0).subtract(f, "day"));
    return g.sort((f, y) => f.date() - y.date());
  };
  return {
    usePreviousDate: e,
    useCurrentDate: (a) => Array.from(
      {
        length: a.daysInMonth()
      },
      (g, h) => a.date(h + 1)
    ),
    useNextDate: (a) => {
      const g = [];
      for (let h = 1; h <= 42 - (e(a).length + a.daysInMonth()); h++)
        g.push(a.date(h).month(a.month()).add(1, "month"));
      return g;
    },
    useDisableDate: (a, { disableDate: g }) => typeof g == "function" ? g(a.toDate()) : !1,
    useBetweenRange: (a, { previous: g, next: h }) => {
      const f = g.isAfter(h, "date") ? "(]" : "[)";
      return !!(a.isBetween(g, h, "date", f) && !a.off);
    },
    useToValueFromString: (a, { formatter: g }) => a.format(g.date),
    useToValueFromArray: ({ previous: a, next: g }, {
      formatter: h,
      separator: f
    }) => `${a.format(h.date)}${f}${g.format(
      h.date
    )}`
  };
}
function Yn() {
  return {
    useVisibleViewport: (n) => {
      if (n) {
        const { right: s } = n.getBoundingClientRect(), t = window.innerWidth || document.documentElement.clientWidth;
        return s > t;
      } else
        return null;
    }
  };
}
const En = ["disabled", "placeholder"], Ln = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, Fn = ["disabled"], Bn = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Nn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Rn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, In = { class: "flex flex-wrap lg:flex-nowrap" }, Hn = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Un = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, zn = { class: "px-0.5 sm:px-2" }, Wn = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, Kn = { class: "px-0.5 sm:px-2" }, Gn = { key: 0 }, Zn = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] /[1]" }, qn = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Jn = ["disabled", "onClick", "textContent"], Xn = ["onClick", "textContent"], Qn = {
  key: 1,
  class: "sm:hidden"
}, ea = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] /[1]" }, ta = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, oa = ["onClick", "textContent"], na = {
  key: 1,
  class: "flex"
}, aa = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4/[1]" }, ra = { class: "flex flex-wrap lg:flex-nowrap" }, sa = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, la = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, ua = { class: "px-0.5 sm:px-2" }, ia = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, da = { class: "px-0.5 sm:px-2" }, ca = { key: 0 }, ma = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] /[1]" }, fa = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, pa = ["disabled", "textContent"], va = /* @__PURE__ */ ue({
  __name: "VueTailwindDatePicker",
  props: {
    noInput: { type: Boolean },
    overlay: { type: Boolean },
    asSingle: { type: Boolean },
    useRange: { type: Boolean },
    placeholder: { default: "" },
    i18n: { default: "en" },
    inputClasses: { default: "" },
    disabled: { type: Boolean, default: !1 },
    disableInRange: { type: Boolean, default: !1 },
    disableDate: { type: [Boolean, Function], default: !1 },
    autoApply: { type: Boolean, default: !0 },
    shortcuts: { type: [Boolean, Function], default: !0 },
    separator: { default: " ~ " },
    formatter: { default: () => ({
      date: "YYYY-MM-DD HH:mm:ss",
      month: "MMM"
    }) },
    startFrom: { default: () => /* @__PURE__ */ new Date() },
    weekdaysSize: { default: "short" },
    weekNumber: { type: Boolean, default: !1 },
    options: { default: () => ({
      shortcuts: {
        today: "Today",
        yesterday: "Yesterday",
        past: (e) => `Last ${e} Days`,
        currentMonth: "This Month",
        pastMonth: "Last Month"
      },
      footer: {
        apply: "Apply",
        cancel: "Cancel"
      }
    }) },
    modelValue: { default: () => [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] }
  },
  emits: ["update:modelValue", "selectMonth", "selectYear", "selectRightMonth", "selectRightYear", "clickPrev", "clickNext", "clickRightPrev", "clickRightNext"],
  setup(e, { expose: n, emit: s }) {
    const t = e, l = s, {
      useCurrentDate: v,
      useDisableDate: u,
      useBetweenRange: a,
      useNextDate: g,
      usePreviousDate: h,
      useToValueFromArray: f,
      useToValueFromString: y
    } = Cn(), { useVisibleViewport: x } = Yn();
    d.extend(Ho), d.extend(zo), d.extend(Ko), d.extend(Zo), d.extend(Jo), d.extend(Qo), d.extend(tn);
    const O = J(null), N = J(null), F = J(null), V = J(""), Y = J(null), M = J(""), j = J([]), D = J([]), w = J(null), P = J(null), r = xt({
      previous: {
        calendar: !0,
        month: !1,
        year: !1
      },
      next: {
        calendar: !0,
        month: !1,
        year: !1
      }
    }), o = J({
      previous: d(),
      next: d().add(1, "month"),
      year: {
        previous: d().year(),
        next: d().year()
      },
      weeks: t.weekdaysSize === "min" ? d.weekdaysMin() : d.weekdaysShort(),
      months: t.formatter.month === "MMM" ? d.monthsShort() : d.months()
    }), B = le(() => o.value.weeks), E = le(() => o.value.months), _ = le(() => {
      const { previous: p, next: c, year: m } = se(o);
      return {
        previous: {
          date: () => h(p).concat(v(p)).concat(g(p)).map((i) => (Object.assign(i, {
            today: i.isToday(),
            active: p.month() === i.month(),
            off: p.month() !== i.month(),
            sunday: i.day() === 0,
            disabled: u(i, t) && !k(i),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return p.month() !== i.month();
            },
            hovered: () => b() && j.value.length > 1 ? (i.isBetween(
              j.value[0],
              j.value[1],
              "date",
              "()"
            ) || i.isBetween(
              j.value[1],
              j.value[0],
              "date",
              "(]"
            )) && p.month() === i.month() : !1,
            duration: () => !1
          }), i)),
          month: p && p.format(t.formatter.month),
          year: p && p.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (i, $) => m.previous + $
          ),
          onPrevious: () => {
            o.value.previous = p.subtract(1, "month"), l("clickPrev", o.value.previous);
          },
          onNext: () => {
            o.value.previous = p.add(1, "month"), p.diff(c, "month") === -1 && (o.value.next = c.add(1, "month")), l("clickNext", o.value.previous);
          },
          onPreviousYear: () => {
            o.value.year.previous = o.value.year.previous - 12;
          },
          onNextYear: () => {
            o.value.year.previous = o.value.year.previous + 12;
          },
          openMonth: () => {
            r.previous.month = !r.previous.month, r.previous.year = !1, r.previous.calendar = !r.previous.month;
          },
          setMonth: (i) => {
            o.value.previous = p.month(i), r.previous.month = !r.previous.month, r.previous.year = !1, r.previous.calendar = !r.previous.month, l("selectMonth", o.value.previous), He(() => {
              (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month")), o.value.year.next = o.value.next.year();
            });
          },
          openYear: () => {
            r.previous.year = !r.previous.year, r.previous.month = !1, r.previous.calendar = !r.previous.year;
          },
          setYear: (i) => {
            o.value.previous = p.year(i), r.previous.year = !r.previous.year, r.previous.calendar = !r.previous.year, l("selectYear", o.value.previous), He(() => {
              (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month")), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year();
            });
          }
        },
        next: {
          date: () => h(c).concat(v(c)).concat(g(c)).map((i) => (Object.assign(i, {
            today: i.isToday(),
            active: c.month() === i.month(),
            off: c.month() !== i.month(),
            sunday: i.day() === 0,
            disabled: u(i, t) && !k(i),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return c.month() !== i.month();
            },
            hovered: () => j.value.length > 1 ? (i.isBetween(
              j.value[0],
              j.value[1],
              "date",
              "()"
            ) || i.isBetween(
              j.value[1],
              j.value[0],
              "date",
              "(]"
            )) && c.month() === i.month() : !1,
            duration: () => !1
          }), i)),
          month: c && c.format(t.formatter.month),
          year: c && c.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (i, $) => m.next + $
          ),
          onPrevious: () => {
            o.value.next = c.subtract(1, "month"), c.diff(p, "month") === 1 && (o.value.previous = p.subtract(1, "month")), l("clickRightPrev", o.value.next);
          },
          onNext: () => {
            o.value.next = c.add(1, "month"), l("clickRightNext", o.value.next);
          },
          onPreviousYear: () => {
            o.value.year.next = o.value.year.next - 12;
          },
          onNextYear: () => {
            o.value.year.next = o.value.year.next + 12;
          },
          openMonth: () => {
            r.next.month = !r.next.month, r.next.year = !1, r.next.calendar = !r.next.month;
          },
          setMonth: (i) => {
            o.value.next = c.month(i), r.next.month = !r.next.month, r.next.year = !1, r.next.calendar = !r.next.month, l("selectRightMonth", o.value.next), He(() => {
              (o.value.previous.isSame(o.value.next, "month") || o.value.previous.isAfter(o.value.next)) && (o.value.previous = o.value.next.subtract(
                1,
                "month"
              )), o.value.year.previous = o.value.previous.year();
            });
          },
          openYear: () => {
            r.next.year = !r.next.year, r.next.month = !1, r.next.calendar = !r.next.year;
          },
          setYear: (i) => {
            o.value.next = c.year(i), r.next.year = !r.next.year, r.next.month = !1, r.next.calendar = !r.next.year, l("selectRightYear", o.value.next), He(() => {
              (o.value.previous.isSame(o.value.next, "month") || o.value.previous.isAfter(o.value.next)) && (o.value.previous = o.value.next.subtract(
                1,
                "month"
              )), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year();
            });
          }
        }
      };
    }), G = J(!1);
    setTimeout(() => {
      G.value = !0;
    }, 250);
    function Z() {
      return d().localeData().firstDayOfWeek();
    }
    function A(p) {
      const c = [...p], m = c.shift();
      return [...c, m];
    }
    function b() {
      return !t.useRange && !t.asSingle ? !0 : !t.useRange && t.asSingle ? !1 : t.useRange && !t.asSingle ? !0 : !!(t.useRange && t.asSingle);
    }
    function k(p) {
      if (t.disableInRange || typeof t.disableDate == "function" || M.value === "")
        return !1;
      let c, m;
      if (Array.isArray(t.modelValue)) {
        const [i, $] = t.modelValue;
        c = i, m = $;
      } else if (typeof t.modelValue == "object") {
        if (t.modelValue) {
          const [i, $] = Object.values(t.modelValue);
          c = i, m = $;
        }
      } else {
        const [i, $] = t.modelValue.split(t.separator);
        c = i, m = $;
      }
      return p.isBetween(
        d(c, t.formatter.date, !0),
        d(m, t.formatter.date, !0),
        "date",
        "[]"
      );
    }
    function C() {
      w.value = null, P.value = null, j.value = [], Y.value = null;
    }
    function S() {
      if (M.value = "", Array.isArray(t.modelValue))
        l("update:modelValue", []);
      else if (typeof t.modelValue == "object") {
        const p = {}, [c, m] = Object.keys(t.modelValue);
        p[c] = "", p[m] = "", l("update:modelValue", p);
      } else
        l("update:modelValue", "");
      D.value = [], N.value && N.value.focus();
    }
    n({ clearPicker: S });
    function I() {
      if (b()) {
        const [p, c] = M.value.split(t.separator), [m, i] = [
          d(p, t.formatter.date, !0),
          d(c, t.formatter.date, !0)
        ];
        if (m.isValid() && i.isValid())
          if (R(m), R(i), Array.isArray(t.modelValue))
            l("update:modelValue", [p, c]);
          else if (typeof t.modelValue == "object") {
            const $ = {}, [L, K] = Object.keys(t.modelValue);
            $[L] = p, $[K] = c, l("update:modelValue", $);
          } else
            l(
              "update:modelValue",
              f(
                {
                  previous: m,
                  next: i
                },
                t
              )
            );
      } else {
        const p = d(M.value, t.formatter.date, !0);
        if (p.isValid())
          if (R(p), Array.isArray(t.modelValue))
            l("update:modelValue", [M.value]);
          else if (typeof t.modelValue == "object") {
            const c = {}, [m] = Object.keys(t.modelValue);
            c[m] = M.value, l("update:modelValue", c);
          } else
            l("update:modelValue", M.value);
      }
    }
    function R(p, c) {
      if (b())
        if (w.value)
          if (P.value = p, t.autoApply) {
            p.isBefore(w.value) ? M.value = f(
              {
                previous: p,
                next: w.value
              },
              t
            ) : M.value = f(
              {
                previous: w.value,
                next: p
              },
              t
            );
            const [m, i] = M.value.split(t.separator);
            if (Array.isArray(t.modelValue))
              l("update:modelValue", [
                d(m, t.formatter.date, !0).format(t.formatter.date),
                d(i, t.formatter.date, !0).format(t.formatter.date)
              ]);
            else if (typeof t.modelValue == "object") {
              const $ = {}, [L, K] = Object.keys(t.modelValue);
              $[L] = m, $[K] = i, l("update:modelValue", $);
            } else
              l(
                "update:modelValue",
                f(
                  {
                    previous: d(m, t.formatter.date, !0),
                    next: d(i, t.formatter.date, !0)
                  },
                  t
                )
              );
            c && c(), D.value = [], d(m, t.formatter.date, !0).isSame(
              d(i, t.formatter.date, !0),
              "month"
            ) || (o.value.previous = d(m, t.formatter.date, !0), o.value.next = d(i, t.formatter.date, !0)), C();
          } else {
            w.value.isAfter(p, "month") ? D.value = [p, w.value] : D.value = [w.value, p];
            const [m, i] = D.value;
            m.isSame(i, "month") || (o.value.previous = m, o.value.next = i), C();
          }
        else
          D.value = [], w.value = p, Y.value = p, j.value.push(p), D.value.push(p), o.value.previous = p, o.value.next.isSame(p, "month") && (o.value.previous = o.value.next, o.value.next = p.add(1, "month"));
      else if (t.autoApply) {
        if (M.value = y(p, t), Array.isArray(t.modelValue))
          l("update:modelValue", [M.value]);
        else if (typeof t.modelValue == "object") {
          const m = {}, [i] = Object.keys(t.modelValue);
          m[i] = M.value, l("update:modelValue", m);
        } else
          l("update:modelValue", M.value);
        c && c(), D.value = [], C();
      } else
        D.value = [p], C();
    }
    function U(p) {
      if (D.value.length < 1)
        return !1;
      let c;
      if (b()) {
        const [m, i] = D.value;
        i.isBefore(m) ? c = f(
          {
            previous: i,
            next: m
          },
          t
        ) : c = f(
          {
            previous: m,
            next: i
          },
          t
        );
      } else {
        const [m] = D.value;
        c = m;
      }
      if (b()) {
        const [m, i] = c.split(t.separator);
        if (Array.isArray(t.modelValue))
          l("update:modelValue", [
            d(m, t.formatter.date, !0).format(t.formatter.date),
            d(i, t.formatter.date, !0).format(t.formatter.date)
          ]);
        else if (typeof t.modelValue == "object") {
          const $ = {}, [L, K] = Object.keys(t.modelValue);
          $[L] = m, $[K] = i, l("update:modelValue", $);
        } else
          l(
            "update:modelValue",
            f(
              {
                previous: d(m, t.formatter.date, !0),
                next: d(i, t.formatter.date, !0)
              },
              t
            )
          );
        M.value = c;
      } else if (M.value = c.format(t.formatter.date), Array.isArray(t.modelValue))
        l("update:modelValue", [M.value]);
      else if (typeof t.modelValue == "object") {
        const m = {}, [i] = Object.keys(t.modelValue);
        m[i] = M.value, l("update:modelValue", m);
      } else
        l("update:modelValue", M.value);
      p && p();
    }
    function X(p) {
      if (!b())
        return !1;
      if (w.value)
        j.value = [w.value, p];
      else
        return j.value = [], !1;
    }
    function ee(p) {
      if (w.value && t.autoApply)
        return !1;
      let c, m;
      if (j.value.length > 1) {
        const [i, $] = j.value;
        c = d(i, t.formatter.date, !0), m = d($, t.formatter.date, !0);
      } else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          const [i, $] = t.modelValue;
          c = i && d(i, t.formatter.date, !0), m = $ && d($, t.formatter.date, !0);
        } else {
          const [i, $] = D.value;
          c = d(i, t.formatter.date, !0), m = d($, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [i, $] = Object.values(t.modelValue);
            c = i && d(i, t.formatter.date, !0), m = $ && d($, t.formatter.date, !0);
          }
        } else {
          const [i, $] = D.value;
          c = d(i, t.formatter.date, !0), m = d($, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        const [i, $] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        c = i && d(i, t.formatter.date, !0), m = $ && d($, t.formatter.date, !0);
      } else {
        const [i, $] = D.value;
        c = d(i, t.formatter.date, !0), m = d($, t.formatter.date, !0);
      }
      return c && m ? a(p, {
        previous: c,
        next: m
      }) : !1;
    }
    function oe(p) {
      const { today: c, active: m, off: i, disabled: $ } = p;
      let L, K, ce;
      if (b())
        if (Array.isArray(t.modelValue))
          if (Y.value) {
            const [z, Q] = j.value;
            K = z && d(z, t.formatter.date, !0), ce = Q && d(Q, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [z, Q] = t.modelValue;
            K = z && d(z, t.formatter.date, !0), ce = Q && d(Q, t.formatter.date, !0);
          } else {
            const [z, Q] = D.value;
            K = z && d(z, t.formatter.date, !0), ce = Q && d(Q, t.formatter.date, !0);
          }
        else if (typeof t.modelValue == "object")
          if (Y.value) {
            const [z, Q] = j.value;
            K = z && d(z, t.formatter.date, !0), ce = Q && d(Q, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [z, Q] = t.modelValue ? Object.values(t.modelValue) : [null, null];
            K = z && d(z, t.formatter.date, !0), ce = Q && d(Q, t.formatter.date, !0);
          } else {
            const [z, Q] = D.value;
            K = z && d(z, t.formatter.date, !0), ce = Q && d(Q, t.formatter.date, !0);
          }
        else if (Y.value) {
          const [z, Q] = j.value;
          K = z && d(z, t.formatter.date, !0), ce = Q && d(Q, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [z, Q] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
          K = z && d(z, t.formatter.date, !0), ce = Q && d(Q, t.formatter.date, !0);
        } else {
          const [z, Q] = D.value;
          K = z && d(z, t.formatter.date, !0), ce = Q && d(Q, t.formatter.date, !0);
        }
      else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          if (t.modelValue.length > 0) {
            const [z] = t.modelValue;
            K = d(z, t.formatter.date, !0);
          }
        } else {
          const [z] = D.value;
          K = z && d(z, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [z] = Object.values(t.modelValue);
            K = d(z, t.formatter.date, !0);
          }
        } else {
          const [z] = D.value;
          K = z && d(z, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        if (t.modelValue) {
          const [z] = t.modelValue.split(t.separator);
          K = d(z, t.formatter.date, !0);
        }
      } else {
        const [z] = D.value;
        K = z && d(z, t.formatter.date, !0);
      }
      return m && (L = c ? "text-vtd-primary-500 font-semibold rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none" : $ ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : p.isBetween(K, ce, "date", "()") ? "text-vtd-secondary-700 font-medium rounded-full" : "text-vtd-secondary-600 font-medium rounded-full"), i && (L = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), K && ce && !i ? (p.isSame(K, "date") && (L = ce.isAfter(K, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", K.isSame(ce, "date") && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), p.isSame(ce, "date") && (L = ce.isAfter(K, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", K.isSame(ce, "date") && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : K && p.isSame(K, "date") && !i && (L = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), L;
    }
    function ie(p) {
      let c, m, i;
      if (c = "", !b())
        return c;
      if (Array.isArray(t.modelValue))
        if (j.value.length > 1) {
          const [$, L] = j.value;
          m = $ && d($, t.formatter.date, !0), i = L && d(L, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [$, L] = t.modelValue;
          m = $ && d($, t.formatter.date, !0), i = L && d(L, t.formatter.date, !0);
        } else {
          const [$, L] = D.value;
          m = $ && d($, t.formatter.date, !0), i = L && d(L, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (j.value.length > 1) {
          const [$, L] = j.value;
          m = $ && d($, t.formatter.date, !0), i = L && d(L, t.formatter.date, !0);
        } else if (t.autoApply) {
          if (t.modelValue) {
            const [$, L] = Object.values(t.modelValue);
            m = $ && d($, t.formatter.date, !0), i = L && d(L, t.formatter.date, !0);
          }
        } else {
          const [$, L] = D.value;
          m = $ && d($, t.formatter.date, !0), i = L && d(L, t.formatter.date, !0);
        }
      else if (j.value.length > 1) {
        const [$, L] = j.value;
        m = $ && d($, t.formatter.date, !0), i = L && d(L, t.formatter.date, !0);
      } else if (t.autoApply) {
        const [$, L] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        m = $ && d($, t.formatter.date, !0), i = L && d(L, t.formatter.date, !0);
      } else {
        const [$, L] = D.value;
        m = $ && d($, t.formatter.date, !0), i = L && d(L, t.formatter.date, !0);
      }
      return m && i && (p.isSame(m, "date") ? (i.isBefore(m) && (c += " rounded-r-full inset-0"), m.isBefore(i) && (c += " rounded-l-full inset-0")) : p.isSame(i, "date") ? (i.isBefore(m) && (c += " rounded-l-full inset-0"), m.isBefore(i) && (c += " rounded-r-full inset-0")) : c += " inset-0"), c;
    }
    function xe(p, c) {
      o.value.previous = d(p, t.formatter.date, !0), o.value.next = d(c, t.formatter.date, !0), (d.duration(o.value.next.diff(o.value.previous)).get("months") === 2 || d.duration(o.value.next.diff(o.value.previous)).get("months") === 1 && d.duration(o.value.next.diff(o.value.previous)).get("days") === 7) && (o.value.next = o.value.next.subtract(1, "month")), (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month"));
    }
    function de(p, c) {
      if (b())
        if (t.autoApply) {
          if (Array.isArray(t.modelValue))
            l("update:modelValue", [p, c]);
          else if (typeof t.modelValue == "object") {
            const m = {}, [i, $] = Object.keys(t.modelValue);
            m[i] = p, m[$] = c, l("update:modelValue", m);
          } else
            l(
              "update:modelValue",
              f(
                {
                  previous: d(p, t.formatter.date, !0),
                  next: d(c, t.formatter.date, !0)
                },
                t
              )
            );
          M.value = `${p}${t.separator}${c}`;
        } else
          D.value = [
            d(p, t.formatter.date, !0),
            d(c, t.formatter.date, !0)
          ];
      else if (t.autoApply) {
        if (Array.isArray(t.modelValue))
          l("update:modelValue", [p]);
        else if (typeof t.modelValue == "object") {
          const m = {}, [i] = Object.keys(t.modelValue);
          m[i] = p, l("update:modelValue", m);
        } else
          l("update:modelValue", p);
        M.value = p;
      } else
        D.value = [
          d(p, t.formatter.date, !0),
          d(c, t.formatter.date, !0)
        ];
      xe(p, c);
    }
    function ke(p) {
      const c = d().format(t.formatter.date), m = d().format(t.formatter.date);
      de(c, m), p && p();
    }
    function ye(p) {
      const c = d().subtract(1, "day").format(t.formatter.date), m = d().subtract(1, "day").format(t.formatter.date);
      de(c, m), p && p();
    }
    function ne(p, c) {
      const m = d().subtract(p - 1, "day").format(t.formatter.date), i = d().format(t.formatter.date);
      de(m, i), c && c();
    }
    function fe(p) {
      const c = d().date(1).format(t.formatter.date), m = d().date(d().daysInMonth()).format(t.formatter.date);
      de(c, m), p && p();
    }
    function be(p) {
      const c = d().date(1).subtract(1, "month").format(t.formatter.date), m = d().date(0).format(t.formatter.date);
      de(c, m), p && p();
    }
    function we(p, c) {
      const [m, i] = p.atClick(), $ = d(m).format(t.formatter.date), L = d(i).format(t.formatter.date);
      de($, L), c && c();
    }
    lt(
      () => D.value,
      (p) => {
        p.length > 0 && (r.previous.calendar = !0, r.previous.month = !1, r.previous.year = !1, r.next.calendar = !0, r.next.month = !1, r.next.year = !1);
      }
    ), $e(() => {
      t.placeholder ? V.value = t.placeholder : b() ? V.value = `${t.formatter.date}${t.separator}${t.formatter.date}` : V.value = t.formatter.date;
    }), d.locale(t.i18n), lt(() => t.i18n, () => d.locale(t.i18n)), $e(() => {
      const p = t.i18n, c = t.modelValue;
      He(async () => {
        if (p in bt) {
          const L = await bt[p]();
          d.locale(L, void 0, !0), d.locale(p);
        }
        let m, i;
        if (b()) {
          if (Array.isArray(c)) {
            if (c.length > 0) {
              const [L, K] = c;
              m = d(L, t.formatter.date, !0), i = d(K, t.formatter.date, !0);
            }
          } else if (typeof c == "object") {
            if (!so(c))
              try {
                Object.keys(c);
              } catch {
                console.warn(
                  "[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model",
                  "font-style: italic; color: #42b883;",
                  ", but you pass it undefined or null."
                ), console.warn(
                  "[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                  "font-style: italic; color: #42b883;",
                  ", but you can replace manually."
                ), l("update:modelValue", {
                  startDate: "",
                  endDate: ""
                });
              }
            if (c) {
              const [L, K] = Object.values(c);
              m = L && d(L, t.formatter.date, !0), i = K && d(K, t.formatter.date, !0);
            }
          } else if (c) {
            const [L, K] = c.split(t.separator);
            m = d(L, t.formatter.date, !0), i = d(K, t.formatter.date, !0);
          }
          m && i ? (M.value = f(
            {
              previous: m,
              next: i
            },
            t
          ), i.isBefore(m, "month") ? (o.value.previous = i, o.value.next = m, o.value.year.previous = i.year(), o.value.year.next = m.year()) : i.isSame(m, "month") ? (o.value.previous = m, o.value.next = i.add(1, "month"), o.value.year.previous = m.year(), o.value.year.next = m.add(1, "year").year()) : (o.value.previous = m, o.value.next = i, o.value.year.previous = m.year(), o.value.year.next = i.year()), t.autoApply || (D.value = [m, i])) : (o.value.previous = d(t.startFrom), o.value.next = d(t.startFrom).add(1, "month"), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year());
        } else {
          if (Array.isArray(c)) {
            if (c.length > 0) {
              const [L] = c;
              m = d(L, t.formatter.date, !0);
            }
          } else if (typeof c == "object") {
            if (c) {
              const [L] = Object.values(c);
              m = d(L, t.formatter.date, !0);
            }
          } else if (c.length) {
            const [L] = c.split(t.separator);
            m = d(L, t.formatter.date, !0);
          }
          m && m.isValid() ? (M.value = y(m, t), o.value.previous = m, o.value.next = m.add(1, "month"), o.value.year.previous = m.year(), o.value.year.next = m.add(1, "year").year(), t.autoApply || (D.value = [m])) : (o.value.previous = d(t.startFrom), o.value.next = d(t.startFrom).add(1, "month"), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year());
        }
        const $ = t.weekdaysSize === "min" ? d.weekdaysMin() : d.weekdaysShort();
        o.value.weeks = Z() ? A($) : $, o.value.months = t.formatter.month === "MMM" ? d.monthsShort() : d.months();
      });
    });
    function Fe(p) {
      return p && F.value === null && (F.value = x(O.value)), p && F.value ? "place-right" : "place-left";
    }
    function Be(p) {
      return p && F.value === null && (F.value = x(O.value)), F.value ? "left-auto right-0" : "left-0 right-auto";
    }
    return re(Ut, ee), re(zt, ie), re(Wt, oe), re(Kt, X), re(Gt, ke), re(Zt, ye), re(qt, ne), re(Jt, fe), re(Xt, be), re(Qt, we), (p, c) => t.noInput ? G.value ? (W(), q("div", na, [
      T("div", aa, [
        T("div", ra, [
          t.shortcuts ? (W(), Ue(gt, {
            key: 0,
            shortcuts: t.shortcuts,
            "as-range": b(),
            "as-single": t.asSingle,
            i18n: t.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : he("", !0),
          T("div", sa, [
            b() && !t.asSingle ? (W(), q("div", la, c[7] || (c[7] = [
              T("div", { class: "h-full border-r border-black/[.1] /[1]" }, null, -1)
            ]))) : he("", !0),
            T("div", {
              class: Te(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": b() && !t.asSingle
              }])
            }, [
              te(Ze, {
                panel: r.previous,
                calendar: _.value.previous
              }, null, 8, ["panel", "calendar"]),
              T("div", ua, [
                me(te(Qe, {
                  months: E.value,
                  onUpdateMonth: _.value.previous.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [pe, r.previous.month]
                ]),
                me(te(Je, {
                  years: _.value.previous.years(),
                  onUpdateYear: _.value.previous.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [pe, r.previous.year]
                ]),
                me(T("div", null, [
                  te(Xe, { weeks: B.value }, null, 8, ["weeks"]),
                  te(qe, {
                    calendar: _.value.previous,
                    weeks: B.value,
                    "as-range": b(),
                    "week-number": p.weekNumber,
                    onUpdateDate: c[3] || (c[3] = (m) => R(m))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [pe, r.previous.calendar]
                ])
              ])
            ], 2),
            b() && !t.asSingle ? (W(), q("div", ia, [
              te(Ze, {
                "as-prev-or-next": "",
                panel: r.next,
                calendar: _.value.next
              }, null, 8, ["panel", "calendar"]),
              T("div", da, [
                me(te(Qe, {
                  months: E.value,
                  onUpdateMonth: _.value.next.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [pe, r.next.month]
                ]),
                me(te(Je, {
                  "as-prev-or-next": "",
                  years: _.value.next.years(),
                  onUpdateYear: _.value.next.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [pe, r.next.year]
                ]),
                me(T("div", null, [
                  te(Xe, { weeks: B.value }, null, 8, ["weeks"]),
                  te(qe, {
                    "as-prev-or-next": "",
                    calendar: _.value.next,
                    weeks: B.value,
                    "as-range": b(),
                    "week-number": p.weekNumber,
                    onUpdateDate: c[4] || (c[4] = (m) => R(m))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [pe, r.next.calendar]
                ])
              ])
            ])) : he("", !0)
          ])
        ]),
        t.autoApply ? he("", !0) : (W(), q("div", ca, [
          T("div", ma, [
            T("div", fa, [
              T("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm disabled:cursor-not-allowed",
                disabled: t.asSingle ? D.value.length < 1 : D.value.length < 2,
                onClick: c[5] || (c[5] = (m) => U()),
                textContent: ae(t.options.footer.apply)
              }, null, 8, pa)
            ])
          ])
        ]))
      ])
    ])) : he("", !0) : (W(), Ue(se(Yt), {
      key: 0,
      id: "vtd",
      as: "div",
      class: "relative w-full"
    }, {
      default: Ne(({ open: m }) => [
        t.overlay && !t.disabled ? (W(), Ue(se(Bo), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : he("", !0),
        te(se(Fo), {
          as: "label",
          class: "relative block"
        }, {
          default: Ne(() => [
            ft(p.$slots, "default", {
              value: M.value,
              placeholder: V.value,
              clear: S
            }, () => [
              me(T("input", lo({
                ref_key: "VtdInputRef",
                ref: N
              }, p.$attrs, {
                "onUpdate:modelValue": c[0] || (c[0] = (i) => M.value = i),
                type: "text",
                class: ["relative block w-full", [
                  t.disabled ? "cursor-default opacity-50" : "opacity-100",
                  p.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none"
                ]],
                disabled: t.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other",
                placeholder: V.value,
                onKeyup: _e(I, ["stop"]),
                onKeydown: c[1] || (c[1] = _e(() => {
                }, ["stop"]))
              }), null, 16, En), [
                [uo, M.value]
              ]),
              T("div", Ln, [
                T("button", {
                  type: "button",
                  disabled: t.disabled,
                  class: Te([
                    t.disabled ? "cursor-default opacity-50" : "opacity-100",
                    "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 rounded-md"
                  ]),
                  onClick: c[2] || (c[2] = (i) => {
                    var $;
                    return t.disabled ? !1 : M.value ? S() : ($ = N.value) == null ? void 0 : $.focus();
                  })
                }, [
                  ft(p.$slots, "inputIcon", { value: M.value }, () => [
                    (W(), q("svg", Bn, [
                      M.value ? (W(), q("path", Nn)) : (W(), q("path", Rn))
                    ]))
                  ])
                ], 10, Fn)
              ])
            ])
          ]),
          _: 3
        }),
        te(wt, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: Ne(() => [
            t.disabled ? he("", !0) : (W(), Ue(se(No), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: Ne(({ close: i }) => [
                T("div", {
                  class: Te(["absolute z-50 top-full sm:mt-2.5", Be(m)])
                }, [
                  T("div", {
                    ref_key: "VtdRef",
                    ref: O,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white sm:rounded-lg shadow-sm"
                  }, [
                    T("div", {
                      class: Te(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4/[1]", Fe(m)])
                    }, [
                      T("div", In, [
                        t.shortcuts ? (W(), Ue(gt, {
                          key: 0,
                          shortcuts: t.shortcuts,
                          "as-range": b(),
                          "as-single": t.asSingle,
                          i18n: t.options.shortcuts,
                          close: i
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : he("", !0),
                        T("div", Hn, [
                          b() && !t.asSingle ? (W(), q("div", Un, c[6] || (c[6] = [
                            T("div", { class: "h-full border-r border-black/[.1] /[1]" }, null, -1)
                          ]))) : he("", !0),
                          T("div", {
                            class: Te(["relative", {
                              "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80": b() && !t.asSingle,
                              "w-full": !b() && t.asSingle
                            }])
                          }, [
                            te(Ze, {
                              panel: r.previous,
                              calendar: _.value.previous
                            }, null, 8, ["panel", "calendar"]),
                            T("div", zn, [
                              me(te(Qe, {
                                months: E.value,
                                onUpdateMonth: _.value.previous.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [pe, r.previous.month]
                              ]),
                              me(te(Je, {
                                years: _.value.previous.years(),
                                onUpdateYear: _.value.previous.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [pe, r.previous.year]
                              ]),
                              me(T("div", null, [
                                te(Xe, { weeks: B.value }, null, 8, ["weeks"]),
                                te(qe, {
                                  calendar: _.value.previous,
                                  weeks: B.value,
                                  "as-range": b(),
                                  "week-number": p.weekNumber,
                                  onUpdateDate: ($) => R($, i)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [pe, r.previous.calendar]
                              ])
                            ])
                          ], 2),
                          b() && !t.asSingle ? (W(), q("div", Wn, [
                            te(Ze, {
                              "as-prev-or-next": "",
                              panel: r.next,
                              calendar: _.value.next
                            }, null, 8, ["panel", "calendar"]),
                            T("div", Kn, [
                              me(te(Qe, {
                                months: E.value,
                                onUpdateMonth: _.value.next.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [pe, r.next.month]
                              ]),
                              me(te(Je, {
                                "as-prev-or-next": "",
                                years: _.value.next.years(),
                                onUpdateYear: _.value.next.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [pe, r.next.year]
                              ]),
                              me(T("div", null, [
                                te(Xe, { weeks: B.value }, null, 8, ["weeks"]),
                                te(qe, {
                                  "as-prev-or-next": "",
                                  calendar: _.value.next,
                                  weeks: B.value,
                                  "as-range": b(),
                                  "week-number": p.weekNumber,
                                  onUpdateDate: ($) => R($, i)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [pe, r.next.calendar]
                              ])
                            ])
                          ])) : he("", !0)
                        ])
                      ]),
                      t.autoApply ? (W(), q("div", Qn, [
                        T("div", ea, [
                          T("div", ta, [
                            T("button", {
                              type: "button",
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              onClick: ($) => i(),
                              textContent: ae(t.options.footer.cancel)
                            }, null, 8, oa)
                          ])
                        ])
                      ])) : (W(), q("div", Gn, [
                        T("div", Zn, [
                          T("div", qn, [
                            T("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm disabled:cursor-not-allowed",
                              disabled: t.asSingle ? D.value.length < 1 : D.value.length < 2,
                              onClick: ($) => U(i),
                              textContent: ae(t.options.footer.apply)
                            }, null, 8, Jn),
                            T("button", {
                              type: "button",
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                              onClick: ($) => i(),
                              textContent: ae(t.options.footer.cancel)
                            }, null, 8, Xn)
                          ])
                        ])
                      ]))
                    ], 2)
                  ], 512)
                ], 2)
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }));
  }
});
const eo = /* @__PURE__ */ (() => {
  const e = va;
  return e.install = (n) => {
    n.component("VueTailwindDatepicker", e);
  }, e;
})(), ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eo
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(ha).forEach(([e, n]) => {
  e !== "default" && (eo[e] = n);
});
export {
  eo as default
};
