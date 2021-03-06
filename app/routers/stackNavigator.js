import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Beranda from '../screens/Beranda';
import Materi from '../screens/Materi';
import DetailMateri from '../screens/DetailMateri';
import ListQuiz from '../screens/ListQuiz';
import DetailQuiz from '../screens/DetailQuiz';
import Quiz from '../screens/Quiz';
import SettingScreen from '../screens/Setting';
import TentangScreen from '../screens/Tentang';
import BantuanScreen from '../screens/Bantuan';
import Score from '../screens/Score';
import SessionScreen from '../screens/SessionScreen';
import Pembahasan from '../screens/Pembahasan';
import SplashScreen from '../screens/SplashScreen';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    SessionScreen: {
      screen: SessionScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarVisible: false
      }
    }
    
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const BerandaStack = StackNavigator(
  {
   
    Beranda: {
      screen: Beranda,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Score: {
      screen: Score,
      navigationOptions: {
        tabBarVisible: false
      }
    }, 
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Pembahasan: {
      screen: Pembahasan,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    ListQuiz: {
      screen: ListQuiz,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    DetailQuiz: {
      screen: DetailQuiz,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Materi: {
      screen: Materi,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    DetailMateri: {
      screen: DetailMateri,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Bantuan: {
      screen: BantuanScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Tentang: {
      screen: TentangScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    },
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
)
