import {IconsList} from "./IconsList";
import {AddedIcon} from "./IconsComponents/AddedIcon";
import {DecreaseIcon} from "./IconsComponents/DecreaseIcon";
import {EditIcon} from "./IconsComponents/EditIcon";
import {DeleteIcon} from "./IconsComponents/DeleteIcon";
import {StatisticIcon} from "./IconsComponents/StatisticIcon";
import {TomatoIcon} from "./IconsComponents/TomatoIcon";
import {SelectIcon} from "./IconsComponents/SelectIcon";
import {TomatoCountIcon} from "./IconsComponents/TomatoCountIcon";
import {FocusIcon} from "./IconsComponents/FocusIcon";
import {PauseIcon} from "./IconsComponents/PauseIcon";
import {StopIcon} from "./IconsComponents/StopIcon";

interface IIconsProps {
  icon: IconsList
}

export const Icons = ({icon}:IIconsProps) => {

  switch (icon){
    case IconsList.AddedIcon: return <AddedIcon/>
    case IconsList.DecreaseIcon: return <DecreaseIcon/>
    case IconsList.EditIcon: return <EditIcon/>
    case IconsList.DeleteIcon: return <DeleteIcon/>
    case IconsList.StatisticIcon: return <StatisticIcon/>
    case IconsList.TomatoIcon: return <TomatoIcon/>
    case IconsList.SelectIcon: return <SelectIcon/>
    case IconsList.TomatoCountIcon: return <TomatoCountIcon/>
    case IconsList.FocusIcon: return <FocusIcon/>
    case IconsList.PauseIcon: return <PauseIcon/>
    case IconsList.StopIcon: return <StopIcon/>
  }
}