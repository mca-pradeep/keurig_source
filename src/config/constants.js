export const PATHS = {
  BASE_PATH: "https://bf-keurig-touchless-api.azurewebsites.net/v1/",
  RESERVE: "reserve",
  START_BREW: "command/{brewerId}/brew",
};

export const assets_images = {
  BREWING_LOADER_HOME_IMG: "/imgs/svg/bg_home.svg",
  BREWING_IMG: "/imgs/svg/brewing_bg.svg",

  BEVERAGE_INFO: "/imgs/beverage-info/Info_button.svg",
  BEVERAGE_INFO_CLOSE: "/imgs/beverage-info/close_btn.svg",

  SUBMIT_BUTTON_DEFAULT: "/imgs/buttons/default.svg",
  SUBMIT_BUTTON_SELECTED: "/imgs/buttons/selected.svg",

  BACK_BUTTON_00: "/imgs/back/mobile.svg",
  POD_000: "/imgs/pods/POD.png",
  POD_001: "/imgs/pods/cafe-bustelo.png",

  POD_BG_000: "/imgs/pods/bg/BevSelection.jpg",
  POD_BG_001: "/imgs/pods/bg/BevSelection.jpg",
  // POD_BG_002: "/imgs/pods/bg/Bev_GMCR.jpg",
  // POD_BG_003: "/imgs/pods/bg/Bev_GMCR-1.jpg",
  // POD_BG_004: "/imgs/pods/bg/Bev_McCafe.jpg",
  // POD_BG_005: "/imgs/pods/bg/Bev_McCafe-1.jpg",
  // POD_BG_006: "/imgs/pods/bg/Bev_McCafe Copy.jpg",
  // POD_BG_007: "/imgs/pods/bg/Bev_McCafe Copy 2.jpg",
  // POD_BG_008: "/imgs/pods/bg/Bev_McCafe Copy 2-1.jpg",
  // POD_BG_009: "/imgs/pods/bg/Bev_McCafe Copy-1.jpg",
  // POD_BG_010: "/imgs/pods/bg/BevSelection_enhcd.jpg",

  // beverageTypesDefaultImage: "/imgs/pods/POD.png",
};
export const beverageTypes = {
  Coffee: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0020_coffee.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0022_coffee.png",
  },
  IcedCoffee: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0019_coffee_BOI.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0021_coffee_BOI.png",
  },
  CafeAuLait: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0018_coffee_milk.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0020_coffee_milk.png",
  },
  Latte: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0015_latte.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0017_latte.png",
  },
  Cappuccino: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0012_capp.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0014_capp.png",
  },
  CafeMocha: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0017_coffee_mocha.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0019_coffee_mocha.png",
  },
  MochaLatte: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0014_latte_mocha.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0016_latte_mocha.png",
  },
  MochaCappuccino: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0011_capp_mocha.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0013_capp_mocha.png",
  },
  CafeVanilla: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0016_coffee_vanilla.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0018_coffee_vanilla.png",
  },
  VanillaLatte: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0013_latte_vanilla.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0015_latte_vanilla.png",
  },
  VanillaCappuccino: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0010_capp_vanilla.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0012_capp_vanilla.png",
  },
  Tea: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0009_tea.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0011_tea.png",
  },
  IcedTea: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0008_tea_BOI.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0010_tea_BOI.png",
  },
  TeaAuLait: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0005_tea_milk.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0007_tea_milk.png",
  },
  TeaLatte: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0007_tea_latte.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0009_tea_latte.png",
  },
  VanillaTeaAuLait: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0004_tea_vanilla.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0006_tea_vanilla.png",
  },
  VanillaTeaLatte: {
    listing:
      "/imgs/bev-images/bev-selection/bev_selec_0006_tea_latte_vanilla.png",
    header:
      "/imgs/bev-images/brew-screen/header_bev_0008_tea_latte_vanilla.png",
  },
  HotChocolate: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0003_hot_choc.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0005_hot_choc.png",
  },
  CafeStyleBeverage: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0002_cafe_style.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0004_cafe_style.png",
  },
  Cider: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0000_cider.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0002_cider.png",
  },
  CafeEscapes: {
    listing: "/imgs/bev-images/bev-selection/bev_selec_0001_cafe_escapes.png",
    header: "/imgs/bev-images/brew-screen/header_bev_0003_cafe_escapes.png",
  },
};
export const system_size_unit = "oz";
export const system_sizes = {
  4: `<svg class="productdname colorsvg" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.592 9.63148C22.1807 10.5384 21.5121 11.1455 20.2732 11.7951C19.0268 12.4247 18.0706 13.0593 18.666 11.5153C19.2615 9.96377 20.1193 7.61774 20.1193 7.61774C20.851 5.73641 21.8022 5.05434 22.5592 5.93379C23.306 6.82324 22.9881 8.71955 22.592 9.63148ZM20.1345 3.96003C20.2152 3.25047 20.2707 2.5534 20.2732 1.86384C20.2808 0.449719 19.8216 0 19.4053 0H0.86047C0.459296 0 -0.00747845 0.449719 9.08664e-05 1.86384C0.0530761 8.57714 4.37768 17.1543 5.38944 18.0237C6.40121 18.8782 6.61567 20 6.61567 20H9.35324H10.9201H13.6551C13.6551 20 13.8822 18.8782 14.8839 18.0237C15.1185 17.8139 15.5147 17.2342 15.9991 16.3648C16.6576 16.2448 17.7224 15.2804 18.9638 14.5334C20.5533 13.574 22.5567 12.6496 23.4801 10.2436C24.4111 7.8401 24.01 5.01437 22.9225 3.92755C22.0571 3.05809 20.6769 3.66271 20.1345 3.96003Z" fill="#5B3427"/></svg>`,
  6: `<svg class="productdname colorsvg" width="37" height="16" viewBox="0 0 37 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.699 8.30731C29.3465 7.18417 30.3049 5.48657 30.3049 5.48657C31.1078 4.12896 32.1556 3.63891 32.9948 4.27668C33.8275 4.91211 33.4782 6.28613 33.0331 6.94266C32.5837 7.59919 31.8511 8.0447 30.471 8.50427C29.0973 8.95915 28.0452 9.42575 28.699 8.30731ZM35.543 12.006H23.8296C24.1066 11.8044 24.4838 11.4755 24.9075 11.0481C25.7131 10.9626 26.9913 10.3137 28.4907 9.81176C30.4185 9.16728 32.8376 8.53158 33.9575 6.91382C35.0797 5.29168 34.6071 3.3758 33.2893 2.64584C32.2416 2.06275 30.5745 2.46828 29.9133 2.66995C30.0134 2.19647 30.0693 1.71859 30.074 1.25168C30.0926 0.302507 29.5361 0 29.0332 0H6.61438C6.11613 0 5.55502 0.302507 5.57598 1.25168C5.62953 5.51528 10.2325 10.8749 11.8087 12.006H1.46194C0.353684 12.006 0.0160855 13.3454 1.46194 13.3454C2.9008 13.3454 3.54573 14.3976 6.27446 14.7549C9.00318 15.1056 9.65044 15.3599 10.144 16H26.8586C27.3545 15.3599 27.9995 15.1056 30.7282 14.7549C33.4569 14.3976 34.1019 13.3454 35.543 13.3454C36.9866 13.3454 36.6397 12.006 35.543 12.006Z" fill="#5B3427"/></svg>`,
  8: `<svg class="productdname colorsvg" width="27" height="26" viewBox="0 0 27 26" style="position: relative;left: 3px;" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.0138 12.201C21.8039 14.2811 19.6602 16.3492 17 18L19.2152 6.01087C21.2099 5.92016 22.7913 6.39586 23.5423 7.49439C24.3012 8.59494 24.1105 10.3062 23.0138 12.201ZM20.4536 3.08927C20.5408 2.32656 20.6219 2.09269 20.6401 1.97259C20.7232 1.39108 20.6766 1.04133 20.482 0.796928C20.184 0.43875 19.5516 0.350259 18.6151 0.257554C14.8733 -0.0837683 3.66396 -0.0690198 1.58628 0.202774C0.895072 0.306013 0.438996 0.506172 0.193728 0.813783C-0.067755 1.17407 -0.00491791 1.5786 0.0437302 1.83986L0.0599462 1.93678C0.175485 2.74584 0.718722 6.29601 1.35317 10.8364C2.25519 17.4037 3.2768 23.6824 3.38221 24.2765C3.57274 25.3616 4.67341 25.5618 5.56326 25.7282L5.81866 25.764C6.60514 25.9157 8.11729 26 9.7247 26C11.8308 26 14.0868 25.8609 15.0334 25.5891C16.1746 25.2584 16.2922 24.5673 16.3794 24.0637C16.3875 23.9816 17.3523 20.4187 17.3523 20.4187C17.8874 20.1217 18.2584 19.8457 18.7854 19.5149C21.834 17.587 24.3009 15.1535 25.7198 12.6463C27.2563 9.93467 27.4123 7.42111 26.1738 5.57755C25.0651 3.92572 22.9914 3.10401 20.4536 3.08927Z" fill="#5B3427"/></svg>`,
  10: `<svg class="productdname colorsvg" style="position: relative;left: 2px;" width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.5 16.5553C29.5 17.9038 28.3379 19 26.9111 19H24.5V7H26.9111C28.3379 7 29.5 8.10387 29.5 9.4524V16.5553ZM26.864 3.66568H24.3991V2.08712C24.3991 0.931678 23.4477 0 22.2681 0H13.6112H11.2794H2.63517C1.45131 0 0.5 0.931678 0.5 2.08712V23.768C0.5 24.486 0.876296 25.1329 1.46188 25.4991C1.76842 25.7513 2.1574 25.9751 2.61825 26.1704C2.74509 26.4877 2.92267 27.4052 3.28629 27.7042C4.85066 28.5077 7.96674 28.9227 11.2794 28.9878V29C11.3449 29 13.3892 29 13.4378 28.9878C13.4991 29 13.5541 29 13.6112 29V28.9878C16.9281 28.9227 20.0378 28.5077 21.6128 27.7042C21.9722 27.4052 22.1561 26.4877 22.2766 26.1704C22.7417 25.9751 23.1264 25.7513 23.4351 25.4991C24.0101 25.1329 24.3991 24.486 24.3991 23.768V22.1833H26.864C29.9822 22.1833 32.5 19.7056 32.5 16.6726V9.17438C32.5 6.13321 29.9822 3.66568 26.864 3.66568Z" fill="#5B3427"/></svg>`,
  12: `<svg class="productdname colorsvg" width="38" height="35" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.08417 13.2145C9.32656 16.1892 10.2721 20.6406 10.2721 20.6406C10.2721 20.6406 11.7665 33.3215 11.7665 33.6126C11.7665 33.9056 11.7826 35 12.5899 35H16.8809H18.8381H23.1411C23.9364 35 23.9484 33.9056 23.9484 33.6126C23.9484 33.3215 25.4469 20.6406 25.4469 20.6406C25.4469 20.6406 26.3964 16.1892 26.6308 13.2145C26.733 11.8678 26.729 9.37434 26.6909 6.97012C33.9047 6.97012 32.5204 14.9706 28.1032 21.2596C27.6104 21.964 28.4317 22.8954 28.9746 22.3793C35.2869 16.2959 35.8418 3.91584 29.5616 3.91584C28.568 3.91584 26.6208 3.86345 26.6208 3.86345C26.6208 3.86345 26.5527 1.11576 26.5527 0.871265C26.5527 0.145534 26.2382 0 25.5831 0H17.9266H17.7964H10.1319C9.47881 0 9.17431 0.145534 9.17431 0.871265C9.17431 1.60088 8.85179 10.2359 9.08417 13.2145Z" fill="#5B3427"/></svg>`,
};

export const effective_languages = ["en", "fr", "sp"];

export const views_svg = {
  list:
    '<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H21M1 8.2H21M1 16H21" stroke="#5B3427" stroke-width="2" stroke-linecap="round"/></svg>',
  group:
    '<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.4"><rect x="0.875" y="1.42554" width="7.13889" height="7.13889" rx="1.125" stroke="#5B3427" stroke-width="1.75"/><rect x="0.875" y="12.5366" width="7.13889" height="7.13889" rx="1.125" stroke="#5B3427" stroke-width="1.75"/><rect x="11.9861" y="1.42554" width="7.13889" height="7.13889" rx="1.125" stroke="#5B3427" stroke-width="1.75"/><rect x="11.9861" y="12.5366" width="7.13889" height="7.13889" rx="1.125" stroke="#5B3427" stroke-width="1.75"/></g></svg>',
};
export const dashboard_views = {
  LIST: "list",
  GROUP: "group",
};
export const KEURIG_LOGO =
  '<svg width="94" height="28" viewBox="0 0 94 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M92.8873 0.791293H92.6537V1.18823H92.8873C93.0042 1.18823 93.0392 1.14084 93.0392 1.06434V0.91592C93.0392 0.815267 92.9927 0.791293 92.8873 0.791293ZM92.8873 1.3189H92.6537V1.64465H92.5131V0.660809H92.8873C93.0979 0.660809 93.1794 0.755607 93.1794 0.91592V1.06434C93.1794 1.17067 93.1439 1.24222 93.0392 1.2887L93.3023 1.64465H93.1327L92.8873 1.3189ZM92.8261 2.08826C92.3321 2.08826 91.9323 1.67997 91.9323 1.1767C91.9323 0.673437 92.3321 0.264966 92.8261 0.264966C93.319 0.264966 93.7196 0.673437 93.7196 1.1767C93.7196 1.67997 93.319 2.08826 92.8261 2.08826ZM92.8261 0.132652C92.2601 0.132652 91.8018 0.599868 91.8018 1.1767C91.8018 1.75336 92.2601 2.22057 92.8261 2.22057C93.3912 2.22057 93.8497 1.75336 93.8497 1.1767C93.8497 0.599868 93.3912 0.132652 92.8261 0.132652ZM60.6159 5.04089C60.6159 4.02063 60.1428 3.60026 58.9598 3.60026H55.6781V8.36904H58.871C60.1428 8.36904 60.6159 7.88975 60.6159 6.83929V5.04089ZM62.5069 10.7379L65.6198 15.9558H61.1729L58.7074 11.5475H55.6781V15.9554H51.717V0.362143H58.9896C63.1294 0.362143 64.4593 2.01176 64.4593 4.86044V7.04938C64.4593 8.81924 63.986 9.83786 62.5078 10.7377L62.5069 10.7379ZM14.5485 0.362692H10.102L5.59108 8.15932L10.1061 15.9558H14.553L9.90173 8.15932L14.5485 0.362692ZM2.46292 11.3482C1.13411 11.3482 0.0568055 12.447 0.0568055 13.802C0.0568055 15.1564 1.13411 16.2553 2.46292 16.2553C3.79155 16.2553 4.86885 15.1564 4.86885 13.802C4.86885 12.447 3.79155 11.3482 2.46292 11.3482ZM2.46292 0.0623779C1.13411 0.0623779 0.0568055 1.16133 0.0568055 2.5154C0.0568055 3.87093 1.13411 4.96933 2.46292 4.96933C3.79155 4.96933 4.86885 3.87093 4.86885 2.5154C4.86885 1.16133 3.79155 0.0623779 2.46292 0.0623779ZM2.46292 5.70538C1.13411 5.70538 0.0568055 6.80416 0.0568055 8.15932C0.0568055 9.51393 1.13411 10.6125 2.46292 10.6125C3.79155 10.6125 4.86885 9.51393 4.86885 8.15932C4.86885 6.80416 3.79155 5.70538 2.46292 5.70538ZM87.2359 8.24918V12.6272C86.5263 12.7473 85.728 12.8371 84.8702 12.8371C82.8304 12.8371 82.4463 12.1178 82.4463 10.7981V5.43051C82.4463 3.99061 83.1263 3.51114 84.8116 3.51114C86.4374 3.51114 88.2118 3.6914 90.1027 3.96097L90.4583 0.602796C88.5059 0.212077 86.6736 0.0623779 84.9004 0.0623779C80.3768 0.0623779 78.4846 1.62233 78.4846 4.92065V11.3976C78.4846 14.5159 80.1995 16.2553 84.7826 16.2553C86.822 16.2553 89.0098 15.986 90.8723 15.4463V8.24918H87.2359ZM69.7332 15.9558H73.6949V0.362692H69.7332V15.9558ZM42.8174 10.8879C42.8174 12.1177 42.1379 12.8075 40.1861 12.8075C38.2356 12.8075 37.5857 12.1177 37.5857 10.8879V0.362143H33.6233V11.3376C33.6233 13.7963 35.102 16.2557 40.1861 16.2557C45.3011 16.2557 46.7797 13.7963 46.7797 11.3376V0.362143H42.8174V10.8879ZM18.3096 0.362692H29.2185V3.60099H22.2707V6.38928H28.6864V9.65887H22.2707V12.7176H29.2185V15.9558H18.3096V0.362692ZM3.11319 22.8992C3.7757 22.8992 4.31516 23.2094 4.65075 23.7306L5.67013 23.0972C5.18588 22.253 4.21755 21.7444 3.12167 21.7444C1.2911 21.7444 0 23.0586 0 24.8722C0 26.686 1.2911 28 3.12167 28C4.20907 28 5.10523 27.5088 5.63188 26.7248L4.66356 26.0182C4.30668 26.5438 3.77155 26.8452 3.11319 26.8452C2.06421 26.8452 1.24022 26.0828 1.23589 24.8722C1.23589 23.7004 2.03444 22.8992 3.11319 22.8992ZM10.7279 24.8722C10.7279 26.044 11.5222 26.8452 12.6137 26.8452C13.7094 26.8452 14.4995 26.044 14.4995 24.8722C14.4995 23.7004 13.7094 22.8992 12.6137 22.8992C11.5222 22.8992 10.7279 23.7004 10.7279 24.8722ZM9.49204 24.8722C9.49204 23.0714 10.7831 21.7444 12.6137 21.7444C14.4443 21.7444 15.7397 23.0714 15.7397 24.8722C15.7397 26.673 14.4443 28 12.6137 28C10.7831 28 9.49204 26.673 9.49204 24.8722ZM23.5175 25.7591L22.0498 21.8524H20.3323V27.8688H21.4955V23.4352L23.0939 27.8688H23.9402L25.5386 23.4352V27.8688H26.7018V21.8524H25.0006L23.5175 25.7591ZM33.3561 21.8524L34.8238 25.7591L36.3069 21.8524H38.0079V27.8688H36.8447V23.4352L35.2466 27.8688H34.4L32.8018 23.4352V27.8688H31.6387V21.8524H33.3561ZM44.0155 25.3978H47.0902V24.2948H44.0155V22.9594H47.2391V21.8566H42.8304V27.888H47.273V26.785H44.0155V25.3978ZM52.9898 22.9636V24.4414H54.2979C54.9434 24.4414 55.2788 24.2002 55.2788 23.6918C55.2788 23.192 54.9265 22.9636 54.2979 22.9636H52.9898ZM54.3192 21.8566C55.7376 21.8566 56.4979 22.5372 56.4979 23.6918C56.4979 24.6828 55.8183 25.359 54.6757 25.4712L56.5064 27.888H55.0708L53.3378 25.4882H52.9898V27.888H51.8046V21.8566H54.3192ZM63.8406 22.8992C64.5033 22.8992 65.0426 23.2094 65.3781 23.7306L66.3975 23.0972C65.9135 22.253 64.945 21.7444 63.8491 21.7444C62.0187 21.7444 60.7274 23.0586 60.7274 24.8722C60.7274 26.686 62.0187 28 63.8491 28C64.9365 28 65.8326 27.5088 66.3593 26.7248L65.391 26.0182C65.0343 26.5438 64.4991 26.8452 63.8406 26.8452C62.7916 26.8452 61.9676 26.0828 61.9635 24.8722C61.9635 23.7004 62.7618 22.8992 63.8406 22.8992ZM72.0542 27.888H70.869V21.8566H72.0542V27.888ZM78.4244 25.3762L79.2866 23.0456L80.1445 25.3762H78.4244ZM78.5772 21.8566L76.2625 27.888H77.4986L78.0166 26.4834H80.5521L81.0702 27.888H82.3361L80.0213 21.8566H78.5772ZM87.7292 21.8566V26.7636H90.8724V27.888H86.5442V21.8566H87.7292Z" fill="#5B3427"/></svg>';

export const ERROR_INFO =
  '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13.625" cy="13.375" r="12.4094" stroke="#C90400" stroke-width="1.18125"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0978 5.375L14.7081 15.9069H12.5304L12.1408 5.375H15.0978ZM15.625 19.3989C15.625 20.4543 14.6966 21.375 13.6307 21.375C12.5648 21.375 11.625 20.4543 11.625 19.3989C11.625 18.3434 12.5648 17.4452 13.6307 17.4452C14.6966 17.4452 15.625 18.3434 15.625 19.3989Z" fill="#CC0000"/></svg>';

export const ERRORS = {
  400: ERROR_INFO,
  401: ERROR_INFO,
  404: ERROR_INFO,
  405: ERROR_INFO,
  500: ERROR_INFO,
  105: ERROR_INFO,
};
