import { atom, useRecoilState } from 'recoil';
import { RecoilAtomKeys } from '../../stores/recoilKeys';

type Profile = {
  birthday: string;
  memo: string;
  hobby: string;
  likeFood: string;
};

const initProfile: Profile = {
  birthday: '',
  memo: '',
  hobby: '',
  likeFood: '',
};

const profileState = atom<Profile>({
  key: RecoilAtomKeys.PROFILE_STATE,
  default: initProfile,
});

export const useProfile = () => {
  const [profile, setProfile] = useRecoilState(profileState);
  return [profile, setProfile];
};
