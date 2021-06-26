import DropDown from "./components/Dropdown.vue";
import Logo from "@/components/Logo/Logo";
import ErrorMessage from "@/components/ErrorMessage/Index";
import Pagination from "@/components/Pagination/Index";


/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component("app-logo", Logo);
    Vue.component("error-message", ErrorMessage);
    Vue.component("pagination", Pagination);
    //Vue.component("confirm-dialog", ConfirmDialog);
  }
};

export default GlobalComponents;
