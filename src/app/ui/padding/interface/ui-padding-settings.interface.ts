import { UiPaddingBottom } from "./ui-padding-bottom.interface";
import { UiPaddingLeft } from "./ui-padding-left.interface";
import { UiPaddingRight } from "./ui-padding-right.interface";
import { UiPaddingTop } from "./ui-padding-top.interface";
import { UiPaddingX } from "./ui-padding-x.interface";
import { UiPaddingY } from "./ui-padding-y.interface";
import { UiPadding } from "./ui-padding.interface";

export interface UiPaddingSettings<Padding extends UiPadding> extends
  UiPaddingX<Padding['px']>,
  UiPaddingY<Padding['py']>,
  UiPaddingLeft<Padding['pl']>,
  UiPaddingRight<Padding['pr']>,
  UiPaddingTop<Padding['pt']>,
  UiPaddingBottom<Padding['pb']> {}