export interface IConnectedMatchDashboardProps {
  getCurrentMatchDetailDispatch: () => void;
  currentMatchId: string;
  matchData: any;
  updatedOverProgressDataDispatch: (data: any) => void;
  history: object;
  setUpdateMatchDataDispatch: (data: any) => void;
}

export interface IConnectedMatchResultProps {
  matchData: any;
  history: object;
  currentMatchId: string;
  getCurrentMatchDetailDispatch: () => void;
}

export interface IConnectedLandingPageProps {
  setMatchDataDispatch: (data: object) => void;
  history: object;
}

export interface IAddPlayerProps {
  getPlayerDetails: (data: object) => void;
  id: string;
}

export interface IBattingScoreCardProps {
  matchData: any;
}

export interface IBowlingScoreCardProps {
  matchData: any;
}

export interface IDropdownProps {
  getPlayerSkill: (skill: string) => void;
}

export interface IMatchResultViewProps {
  matchData: any;
}

export interface IMatchViewProps {
  matchData: any;
  updatedOverProgressData: (data: any) => void;
  history: any;
  getMatchDetails: (data: any) => void;
}

export interface IButtonUIProps {
  styleName?: string;
  variantValue?: "text" | "outlined" | "contained" | undefined;
  displayName: string;
  onButtonClick: () => void;
  isDisabled?: boolean;
}

export interface IPlayerListItemProps {
  playerName: string;
  playerSkill: string;
}

export interface ITeamDetailsViewProps {
  getMatchDetails: (data: object) => void;
  history: any;
}

export interface ITeamNameTextFieldProps {
  getTeamName: (data: object) => void;
  id: string;
}

export interface IMatchData {
  currentInning: string;
  firstInning: IFirstInning;
  secondInning: ISecondInning;
  team: ITeams;
}

interface IFirstInning {
  balls: number;
  ballsRemaining: number;
  batsmanOnPitch: IBatsmanOnPitch;
  battingLineUp: IBattingLineUp;
  bowlingLineUp: IBowlingLineUp;
  currentBowler: ICurrentBowler;
  netRunRate: number;
  overs: number;
  score: number;
  totalOver: number;
  wickets: number;
}

interface ISecondInning {
  balls: number;
  ballsRemaining: number;
  batsmanOnPitch: IBatsmanOnPitch;
  battingLineUp: IBattingLineUp;
  bowlingLineUp: IBowlingLineUp;
  currentBowler: ICurrentBowler;
  netRunRate: number;
  overs: number;
  score: number;
  totalOver: number;
  wickets: number;
}

interface IBatsmanOnPitch {
  [index: number]: {
    ballsPlayed: number;
    id: number;
    out: boolean;
    oversPlayed: number;
    playerName: string;
    playerSkill: string;
    runs: number;
    strike: boolean;
  };
}

interface IBattingLineUp {
  [index: number]: {
    ballsPlayed: number;
    id: number;
    out: boolean;
    playerName: string;
    playerSkill: string;
    runs: number;
    strike: boolean;
  };
}

interface IBowlingLineUp {
  [index: number]: {
    id: number;
    overs: number;
    playerName: string;
    playerSkill: string;
    runsConceded: number;
    wickets: number;
  };
}

interface ICurrentBowler {
  balls: number;
  id: number;
  overs: number;
  playerName: string;
  playerSkill: string;
  runsConceded: number;
  wickets: number;
}

interface ITeams {
  firstTeam: IFirstTeam;
  secondTeam: ISecondTeam;
}

interface IFirstTeam {
  playerList: IPlayerList;
  teamName: string;
}

interface ISecondTeam {
  playerList: IPlayerList;
  teamName: string;
}

interface IPlayerList {
  [index: number]: {
    id: number;
    playerName: string;
    playerSkill: string;
  };
}
