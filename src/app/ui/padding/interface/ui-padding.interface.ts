import { UiPaddingX } from "./ui-padding-x.interface";
import { UiPaddingY } from "./ui-padding-y.interface";
import { UiPaddingLeft } from "./ui-padding-left.interface";
import { UiPaddingRight } from "./ui-padding-right.interface";
import { UiPaddingTop } from "./ui-padding-top.interface";
import { UiPaddingBottom } from "./ui-padding-bottom.interface";

export interface UiPadding<
  PX = string,
  PY = string,
  PL = string,
  PR = string,
  PT = string,
  PB = string,
> extends UiPaddingX<PX>, UiPaddingY<PY>, UiPaddingLeft<PL>, UiPaddingRight<PR>, UiPaddingTop<PT>, UiPaddingBottom<PB> {}