import * as constants from './actionTypes';

export function loadingChanged(isLoading){
  return { type: constants.IS_LOADING, isLoading: isLoading};
}

export function displayError(error){
  return {type: constants.UI_ERROR, error: error}
}
export function showActivitySocialMenu(showMenu){
  return {type: constants.IS_SHOW_ACTIVITY_MENU, showActivityMenu: showMenu}
}

export function setCurrentTab(currentTab){
  return {type: constants.SET_CURRENT_TAB, currentTab: currentTab}
}

export function showSideBar(sideBar){
  return{type: constants.IS_SHOW_SIDE_BAR, showSideBar: sideBar}
}
export function showNavBar(navBar){
  return{type: constants.IS_SHOW_NAV_BAR, showNavBar: navBar}
}