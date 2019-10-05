import { Navigation } from 'react-native-navigation';

// *** Action Types ***
export const HIDE_TUTORIAL = 'HIDE_TUTORIAL';
export const SHOW_TUTORIAL = 'SHOW_TUTORIAL';

// *** Action Creators ***
export function hideTutorial() {
  Navigation.dismissModal('tutorialModal');

  return {
    type: HIDE_TUTORIAL,
  };
}

export function showTutorial({ newVersion, skipLanguageSelection }) {
  return async dispatch => {
    const children = [
      {
        component: {
          id: 'tutorialModal',
          name: 'tutorialLanguage',
        },
      },
    ];

    if (skipLanguageSelection && !newVersion) {
      children.push({
        component: {
          name: 'tutorialWelcome',
        },
      });
    }

    Navigation.showModal({
      stack: {
        children,
      },
    });

    dispatch({
      type: SHOW_TUTORIAL,
    });
  };
}
