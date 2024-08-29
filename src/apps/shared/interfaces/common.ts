export interface IModule {
  enable: boolean;
}

export interface FocusedApp {
  hwnd: number;
  name: string;
  title: string;
  exe: string | null;
}
