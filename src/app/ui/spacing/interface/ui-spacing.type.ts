export type SpacingType = 'padding' | 'margin';

export type UiSpacing<
  Type extends SpacingType,
  X = string,
  Y = string,
  Left = string,
  Right = string,
  Top = string,
  Bottom = string,
> = {
  [K in Type extends 'padding' ? `p${'x' | 'y' | 'l' | 'r' | 't' | 'b'}` : `m${'x' | 'y' | 'l' | 'r' | 't' | 'b'}`]?: 
    K extends `${any}x` ? X :
    K extends `${any}y` ? Y :
    K extends `${any}l` ? Left :
    K extends `${any}r` ? Right :
    K extends `${any}t` ? Top :
    K extends `${any}b` ? Bottom :
    never;
};

export interface UiPaddingBottom<PB = string> extends Pick<UiSpacing<'padding', string, string, string, string, string, PB>, 'pb'> {}


const a: UiPaddingBottom = {
  pb: '4',
};
