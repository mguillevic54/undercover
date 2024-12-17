export type TListTeam = {
  [id: string]: TTeam;
};

export type TTeam = {
  name: string;
  teamMates: TTeamMate[];
};

export type TTeamMate = {
  id: number;
  name: string;
  imagePath: string;
  number?: number | undefined;
};
