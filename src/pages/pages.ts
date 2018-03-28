import { ListMasterPage } from './list-master/list-master';
import { SearchPage } from './search/search';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';
import { SignupPage } from './signup/signup'
import { CardsPage } from './cards/cards';
import { TutorialPage } from './tutorial/tutorial';
import { LoginPage } from './login/login';
import { LaunchPage } from './launch/launch';
import { SignupEmailPage } from './signup-email/signup-email';
import { WelcomePage } from './welcome/welcome';
import { AddFriendsPage } from './add-friends/add-friends';
import { FriendsPage } from './friends/friends';
import { InviteFriendsPage } from './invite-friends/invite-friends';
import { InviteTabPage } from './invite-tab/invite-tab';
import { UserAccountPage } from './user-account/user-account';
import { ProfilePage } from './profile/profile';
import { SelectTokenAmount } from './select-token-modal/select-token-modal';
import { ShareBrandPage } from './share-brand/share-brand';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = UserAccountPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = UserAccountPage;