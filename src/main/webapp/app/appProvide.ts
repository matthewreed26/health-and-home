import EssentialsInMemory from './common/secondary/essentials/EssentialsInMemory';

type Provided = () => unknown;
export type Provide = Record<string, Provided>;

export const appProvide = (): Provide => ({
  essentials: () => new EssentialsInMemory(),
});
