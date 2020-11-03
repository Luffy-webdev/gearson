import React, { Component } from 'react';

export default class GearBox extends Component {
    render() {
        return (
            <div className="container-fluid mt-0 is-black p-3 is-operatorMono is-white">
                <p>Gearboxes or also commonly called gear reducers or enclosed speed reducers
                     are used on many electromechanical drive systems
                     Gearboxes are available in a wide range of load capacities and speed ratios.
                      The purpose of a gearbox is to increase or reduce speed. As a result, 
                      torque output will be the inverse of the speed function. If the enclosed drive
                       is a speed reducer (speed output is less than speed input), the torque output will increase;
                        if the drive increases speed, the torque output will decrease. For the vast majority of gate drives,
                         the speed is being reduced and hence the torque is increased. 
                         Thus, gearboxes are commonly called gear reducers in gate drive applications. 
                         Gear drive selection factors include: 
                         <ul>
                         <li>shaft orientation</li> 
                         <li>speed ratio</li>
                          <li>design type</li>
                          <li>nature of load</li>
                          <li>gear rating</li>
                          <li>environment</li>
                          <li>mounting position</li>
                          <li>operating temperature range</li>
                          <li>lubrication</li>
                          </ul>
                          <h2>What is manual transmission?</h2>
    <img src="" alt="" className="img-fluid float-left rounded"/>    
    <p>
        A manual transmission, also known as a manual gearbox, a standard transmission, stick shift (sometimes simply stick), gearbox, 
        or clutch, is a type of transmission used in motor vehicle applications. 
        It uses a driver-operated clutch, usually engaged and disengaged by a foot pedal or hand lever, for regulating 
        power and torque transfer from the engine to the transmission; and a gear selector that can be operated by hand.
        A conventional 5- or 6-speed manual transmission is often the standard equipment in a modern base model vehicle, 
        with 5- speed being common on lower-end vehicles and commercial vehicles. Higher-end vehicles, such as sports cars and 
        luxury cars are often usually equipped with a 6-speed transmission for the base model
    </p>
    <h2>What is automatic transmission?</h2>
    <img src="" alt=""className="img-fluid float-left rounded"/>
    <p>
        An automatic transmission, also called auto, self-shifting transmission, n-speed automatic (where n represents its number of forward gear ratios), or AT, is a type of motor vehicle transmission that automatically changes the gear ratio as the vehicle moves, meaning that the driver does not have to shift the gears manually. Like other transmission systems on vehicles, it allows an internal combustion engine, best suited to run at a relatively high rotational speed, to provide a range of speed and torque outputs necessary for vehicular travel. The number of forward gear ratios is often expressed for manual transmissions as well (e.g., 6-speed manual).
        The most popular form found in automobiles is the <strong>hydraulic planetary automatic transmission</strong>.
    </p>
    <h2>What is a continously variable transmission?</h2>
    <img src="" alt=""className="img-fluid float-left rounded"/>
    <p>
        A continuously variable transmission (CVT) is an automatic transmission that can change seamlessly through a continuous range of gear ratios. This contrasts with other transmissions that provide a limited number of gear ratios in fixed steps. The flexibility of a CVT with suitable control may allow the engine to operate at a constant RPM while the vehicle moves at varying speeds.

CVTs are used in automobiles, tractors, motor scooters, snowmobiles and earthmoving equipment.

The most common type of CVT uses two pulleys connected by a belt or chain, however several other designs have also been used at times.
    </p>
    <p>
        <h4>
   Gears are one of the most common transmission systems. Based on this there are mainly 5 different types of GearBox we see in daily life:</h4>
    <ul>
        <li>Sequential GearBox</li>
        <li>Helical(can be sequential or epicyclic) GearBox</li>
        <li>Bevel GearBox</li>
        <li>Worm GearBox</li>
        <li>Epicyclic GearBox</li>
    </ul>
    <h2>Sequential GearBox</h2>
    <img src="" alt=""className="img-fluid float-left rounded"/>
    <p>A sequential gearbox is similar to a manual transmission, but it’s a bit different. 
        In a car with a manual transmission, you shift the car through the gears in an “H” pattern. 
        The top left position is first, and then you move straight down to second. 
        To get to third, you shift up, to the right and up again. Fourth gear is straight down from third. In a vehicle with a sequential gearbox, 
        you just hit a lever or a paddle to click through each of the gears in order, whether you are up-shifting or down-shifting.</p>
    </p>
    <h2>Epicyclic GearBox</h2>
    <p>
        In an epicyclic or planetary gear train, several spur gears distributed evenly around the circumference run between a gear with internal teeth and a gear with external teeth on a concentric orbit. The circulation of the spur gear takes place in analogy to the orbiting of the planets in the solar system. This is how planetary gears acquired their name.
        The components of a planetary gear train can be divided into four main constituents.<br/><br/>
        The housing with integrated internal teeth is known as a ring gear. In the majority of cases the housing is fixed. The driving sun pinion is in the center of the ring gear, and is coaxially arranged in relation to the output. The sun pinion is usually attached to a clamping system in order to provide the mechanical connection to the motor shaft. During operation, the planetary gears, which are mounted on a planetary carrier, roll between the sun pinion and the ring gear. The planetary carrier also represents the output shaft of the gearbox. <br/>
        The sole purpose of the planetary gears is to transfer the required torque. The number of teeth has no effect on the transmission ratio of the gearbox. The number of planets can also vary. <span>As the number of planetary gears increases, the distribution of the load increases and therefore the torque that can be transmitted.</span><br/>
        Increasing the number of tooth engagements also reduces the rolling power.<span> Since only part of the total output has to be transmitted as rolling power, a planetary gear is extremely efficient.</span><br/> 
        <strong>The advantage of a planetary gear compared to a single spur gear lies in this load distribution. It is therefore possible to transmit high torques with high efficiency with a compact design using planetary gears.</strong><br/>
        Provided that the ring gear has a constant size, different ratios can be realized by varying the number of teeth of the sun gear and the number of teeth of the planetary gears. The smaller the sun gear, the greater the ratio. Technically, a meaningful ratio range for a planetary stage is approx. 3:1 to 10:1, since the planetary gears and the sun gear are extremely small above and below these ratios.<br/> Higher ratios can be obtained by connecting several planetary stages in series in the same ring gear. In this case, we speak of multi-stage gearboxes.
    </p>
                         
                </p>
            </div>
        );
    }
}
