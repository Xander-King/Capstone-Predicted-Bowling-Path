import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import StatStack from "./statsStack";
import SimulationStack from "./simulationStack";
import LiveStack from "./liveStack";

import EquipmentStack from "./equipmentStack";

const Drawer = createDrawerNavigator({
    Live: {
        screen: LiveStack,
        
    },
    Simulation: {
        screen: SimulationStack,
        
    },
    Equipment: {
        screen: EquipmentStack,
        
    },
    Statistics: {
        screen: StatStack,
        
    }
});

export default createAppContainer(Drawer);