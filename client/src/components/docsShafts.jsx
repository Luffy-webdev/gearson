import React, { Component } from 'react';
import shaft1 from '../assets/shaft1.png';
import '../style/shafts.css';
import Shaft from '../assets/Shaft mounted.svg'
import { InlineMath, BlockMath } from 'react-katex';
import { Link } from 'react-router-dom';
export default class Shafts extends Component {
    render() {
        return (
            <div className="container-fluid mt-0 is-black is-operatorMono">
            <div style={{width:"100%"}} className="row is-black">
            <div className="col-md-12 pt-3 is-light-bold pr-4">
            <div className="row">
                <div className="col-md-5"><img src={shaft1} className="mt-5 img-fluid" alt=""/></div>
                <div className="col-md-7">
            <p className="is-white  pt-3 pl-2 doc-gear">
A shaft is a rotating member, usually of circular cross section, used to transmit power
or motion. It provides the axis of rotation, or oscillation, of elements such as gears,
pulleys, flywheels, cranks, sprockets, and the like and controls the geometry of their
motion.<br/><br/>An axle is a nonrotating member that carries no torque and is used to support
rotating wheels, pulleys, and the like. The automotive axle is not a true axle; the term
is a carryover from the horse-and-buggy era, when the wheels rotated on nonrotating
members. A nonrotating axle can readily be designed and analyzed as a static beam.<br/><br/>
In deciding on an approach to shaft sizing, it is necessary to realize that a stress analysis
at a specific point on a shaft can be made using only the shaft geometry in the vicinity
of that point. Thus the geometry of the entire shaft is not needed. In design it is usually
possible to locate the critical areas, size these to meet the strength requirements, and then
size the rest of the shaft to meet the requirements of the shaft-supported elements.<br /><br/>
The deflection and slope analyses cannot be made until the geometry of the entire
shaft has been defined. Thus deflection is a function of the geometry everywhere,
whereas the stress at a section of interest is a function of local geometry. For this reason,
shaft design allows a consideration of stress first. Then, after tentative values for
the shaft dimensions have been established, the determination of the deflections and
slopes can be made.<br /><br /></p>
                </div>
            </div>
<p className="is-white pt-3 pl-2 doc-gear">
    <h1 className="is-operatorMono">Shaft Materials</h1>
    <ul>
        <li>
            Deflection is not affected by strength, but rather by stiffness as represented by the modulus of elasticity,
            which is essentially constant for all steels. For that reason, rigidity
            cannot be controlled by material decisions, but only by geometric decisions.
        </li>
        <li>
            Necessary strength to resist loading stresses affects the choice of materials and
            their treatments. Many shafts are made from low carbon, cold-drawn or hot-rolled steel,
            such as ANSI 1020-1050 steels.
        </li>
        <li>
            Significant strengthening from heat treatment and high alloy content are often not
            warranted. Fatigue failure is reduced moderately by increase in strength, and then only
            to a certain level before adverse effects in endurance limit and notch sensitivity begin
            to counteract the benefits of higher strength. A good practice is to start with an inexpensive,
            low or medium carbon steel for the first time through the design calculations
        </li>
    </ul>
 <span className="is-white is-operatorMono" style={{fontSize:"22px"}}>Typical alloy steels for <span style={{color:"#000", backgroundColor:"#ffc600"}}>heat treatment</span> include ANSI 1340-50, 3140-50, 4140, 4340, 5140, and 8650.</span><br/>
 <span className="is-white is-operatorMono" style={{fontSize:"22px"}}>Typical material choices for <span style={{color:"#000", backgroundColor:"#ffc600"}}>surface hardening</span> include carburizing grades of ANSI 1020, 4320, 4820, and 8620.</span><br/><br/>

 In approaching material selection, the amount to be produced is a salient factor. For
low production, turning is the usual primary shaping process. An economic viewpoint
may require removing the least material. High production may permit a volumeconservative shaping method (hot or cold forming, casting), and minimum material in
the shaft can become a design goal. Cast iron may be specified if the production quantity is high, and the gears are to be integrally cast with the shaft.
<h1 className="is-white is-operatorMono"><span style={{color:"#000", backgroundColor:"#ffc600"}}>Shaft Layout</span></h1>
At the very beginning of your design you need to determine the layout on the shaft. You need to decide where all of the gears,
bearing, pulleys, etc will be make contact with the shaft. Than you need to determine what type of load the object will put on the shaft.
After doing this you can generate a <span style={{color:"#000", backgroundColor:"#ffc600"}}><a style={{color:"#000", fontFamily:"Share Tech Mono"}} href="http://www.asee.org/documents/zones/zone1/2008/professional/ASEE12008_0052_paper.pdf">free body diagram</a></span>
  to see how forces will interact, which will than allow you to determine
where the maximum stress and displacement will occur. It will also allow you to create a <a href="https://www.youtube.com/watch?time_continue=2&v=C-FEVzI8oe8" className="is-operatorMono is-white" style={{fontWeight:"700"}}><u>Shear and Bending diagram</u></a>, which can then
be used to determine the shear stresses and bending stresses at any point on the beam.
<div className="row">
    <div className="col-md-5"><img className="img-fluid mt-3" src={Shaft} alt=""/></div>
    <div className="col-md-7">
        <p className="is-white  pt-3 pl-2 doc-gear">
Typically, the geometry of a shaft is a stepped cylinder. This will help position components.
It will also help support components when there is an axial force due to a thrust load.
An example of a component that would produce a thrust load is a worm gear. The steps on a
shaft will only hold the component on one side. If both sides need to be supported than a retaining
ring, a spacer, or clamp will need to be added to hold the component on both sides. By having the component
firmly support not only does this help with alignment, it also can help reduce vibration and chatter from the
component while it is in operation.<br /><br />For the image shown, the shaft is supported by two bearing on each side, and it has
a pulley on it with a spacer to keep the pulley in position. Notice that the stepped cylinder is used to position the bearings and the
pulley at a specified spot. This allows for easier assembly and it also keeps the components from moving around.<br/>
It is best practice to support load carrying components between bearings, instead of having them cantilevered. However,
for ease of assembly sometimes components may need to be cantilevered, such as sprockets and pulleys. This will allow for
    easier assembly of the chain or the belt. When you cantilever a component, it is best to keep the cantilever as short as
possible to help minimize deflection.<br />
Most shafts also will only need to have two bearings supporting it, with one bearing on each end of the shaft.
However, for extremely long shafts that is carry several load bearing components, additional bearings may need to be added in
key areas to minimize bending moments and deflection.<br/><br/>
In cases where axial loads are not trivial, it is necessary to provide a means to transfer
the axial loads into the shaft, then through a bearing to the ground. This will be particularly necessary with helical or bevel gears,
or tapered roller bearings, as each of these
produces axial force components. Often, the same means of providing axial location,
e.g., shoulders, retaining rings, and pins, will be used to also transmit the axial load into
the shaft.
        </p>
    </div>
</div>
<h1 className="is-operatorMono"><span style={{color:"#000", backgroundColor:"#ffc600"}}>Providing for Torque Transmission</span></h1>
Most shafts serve to transmit torque from an input gear or pulley, through the shaft, to an
output gear or pulley. Of course, the shaft itself must be sized to support the torsional stress
and torsional deflection. It is also necessary to provide a means of transmitting the torque
between the shaft and the gears. Common torque-transfer elements are: <ul>
    <li>Keys</li>
    <li>Splines</li>
    <li>Setscrews</li>
    <li>Pins</li>
    <li>Press or Shrink fits</li>
    <li>Tapered fits</li>
    </ul>In addition to transmitting the torque, many of these devices are designed to fail if
the torque exceeds acceptable operating limits, protecting more expensive components.
<h2 className="is-white is-operatorMono"><a href="https://www.linearmotiontips.com/wp-content/uploads/2015/11/Round-key-coupling-shaft.jpg" className="is-operatorMono is-white" style={{fontWeight:"700"}}><u>Keys</u></a></h2><ul>
<li>One of the most effective and economical means of
transmitting moderate to high levels of torque is through a key that fits in a groove in
the shaft and gear.</li><li> Keyed components generally have a slip fit onto the shaft, so assembly and disassembly is easy.</li><li> Keys are used to enable the transmission of torque from the shaft to the
shaft-supported element.</li><li> Pins are used for axial positioning and for the transfer of
torque or thrust or both</li></ul>Pins are useful when the principal
loading is shear and when both torsion and thrust are present. <a href="https://www.basesofva.com/wp-content/uploads/2017/10/MetricTaperPin_main-clearance.jpg"><u className="is-white is-operatorMono" style={{fontWeight:"700"}}>Taper pins</u></a> are sized
according to the diameter at the large end. <br />The diameter at the small end is: <InlineMath>{`d = D - 0.0208L`}</InlineMath><br/>where, <br />d = diameter end(in inches), <br /> D = diameter at large end(in inches) and <br /> L = length(in inches)
<h2 className="is-white is-operatorMono"><a href="https://cfnewsads.thomasnet.com/images/medium/852/852092.jpg" className="is-operatorMono is-white" style={{fontWeight:"700"}}><u>Splines</u></a></h2>
Splines are essentially stubby gear teeth formed on the outside of the shaft and on
the inside of the hub of the load-transmitting component. Splines are generally much
more expensive to manufacture than keys, and are usually not necessary for simple
torque transmission. They are typically used to transfer high torques. One feature of a
spline is that it can be made with a reasonably loose slip fit to allow for large axial
motion between the shaft and component while still transmitting torque. This is useful
for connecting two shafts where relative motion between them is common<br /><br />
For cases of low torque transmission, various means of transmitting torque are
available. These include pins, setscrews in hubs, tapered fits, and press fits.<br/>
<h2 className="is-white is-operatorMono"><a href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dT85SQxVRuWAqDXq0B-hfwHaCk%26pid%3DApi&f=1" className="is-operatorMono is-white" style={{fontWeight:"700"}}><u>Press and Shrink fits</u></a></h2>are used both for torque transfer
and for preserving axial location. The resulting stress-concentration factor is usually
quite small. See Sec. 7–8 for guidelines regarding appropriate sizing and tolerancing to
transmit torque with press and shrink fits. A similar method is to use a split hub with
screws to clamp the hub to the shaft. This method allows for disassembly and lateral
adjustments. Another similar method uses a two-part hub consisting of a split inner
member that fits into a tapered hole. The assembly is then tightened to the shaft with
screws, which forces the inner part into the wheel and clamps the whole assembly
against the shaft.<br />
<h1 className="is-operatorMono"><span style={{color:"#000", backgroundColor:"#ffc600"}}>Assembly and disassembly</span></h1>
Consideration should be given to the method of assembling the components onto the
shaft, and the shaft assembly into the frame. This generally requires the largest diameter in the center of the shaft, with progressively smaller diameters towards the ends to
allow components to be slid on from the ends. If a shoulder is needed on both sides of
a component, one of them must be created by such means as a retaining ring or by a
sleeve between two components. The <Link to="/docs/GearBox"><u className="is-white is-operatorMono" style={{fontWeight:"700"}}>gearbox</u></Link> itself will need means to physically position the shaft into its bearings, and the bearings into the frame. This is typically accomplished by providing access through the housing to the bearing at one end of the shaft. <h1 className="is-white is-operatorMono"><span style={{color:"#000", backgroundColor:"#ffc600"}}>Shaft Stresses</span></h1>Bending, torsion, and axial stresses may be present in both midrange and alternating
components. For analysis, it is simple enough to combine the different types of stresses
into alternating and midrange von Mises stresses.
It is sometimes convenient to customize the equations specifically for shaft applications. Axial loads are usually comparatively very small at critical locations where
bending and torsion dominate, so they will be left out of the following equations. The
fluctuating stresses due to bending and torsion are given by:






 <BlockMath>{`\\sigma_a = K_f{\\frac{M_ac}{I}}, \\sigma_m = K_f{\\frac{M_mc}{I}}`}</BlockMath>
<BlockMath>{`\\tau_a = K_{fs}{\\frac{T_ac}{J}}, \\tau_m = K_{fs}{\\frac{T_mc}{J}}`}</BlockMath>

where Mm and Ma are the midrange and alternating bending moments, Tm and Ta are
the midrange and alternating torques, and Kf and Kf s are the fatigue stress-concentration
factors for bending and torsion, respectively.<br/>
Assuming a solid shaft with round cross section, appropriate geometry terms can
be introduced for c, I, and J resulting in

<BlockMath>{`\\sigma_a = K_f{\\frac{32M_a}{\\pi{d^3}}}, \\sigma_m = K_f{\\frac{32M_m}{\\pi{d^3}}}`}</BlockMath>
<BlockMath>{`\\sigma_a = K_{fs}{\\frac{16T_a}{\\pi{d^3}}}, \\sigma_m = K_{fs}{\\frac{16T_m}{\\pi{d^3}}}`}</BlockMath>

Combining these stresses in accordance with the distortion energy failure theory,
the von Mises stresses for rotating round, solid shafts, neglecting axial loads, are given by


<BlockMath>{`\\sigma_a' = {\\sqrt{(\\sigma_a^2 + 3\\tau_a^2)}}`}</BlockMath>
<InlineMath>{`Therefore,`}</InlineMath>
<BlockMath>{`{\\sigma_a = \\sqrt{(\\frac{32K_fM_a}{\\pi{d^3}})^2 + (\\frac{16K_{fs}T_a}{\\pi{d^3}})^2}}`}</BlockMath><InlineMath>{`Similarly,`}</InlineMath>
<BlockMath>{`\\sigma_m' = {\\sqrt{(\\sigma_m^2 + 3\\tau_m^2)}}`}</BlockMath>
<InlineMath>{`Therefore,`}</InlineMath>
<BlockMath>{`\\sigma_m = {\\sqrt{(\\frac{32K_fM_m}{\\pi{d^3}})^2 + (\\frac{16K_{fs}T_m}{\\pi{d^3}})^2}}`}</BlockMath>


These equivalent alternating and midrange stresses can be evaluated using an
appropriate failure curve on the <a href="https://www.youtube.com/watch?v=o-6V_JoRX1g"><u className="is-white is-operatorMono" style={{fontWeight:"700"}}>modified Goodman diagram</u></a>.The fatigue failure criteria for the modified Goodman line is :

<BlockMath>{`\\frac{1}{n} = \\frac{\\sigma_a'}{S_e} + \\frac{\\sigma_m'}{S_{ut}}`}</BlockMath>

Let <BlockMath>{`a = \\frac{1}{S_e}[\\sqrt{4(K_fM_a)^2 + 3(K_{fs}T_a)^2}]`}</BlockMath><InlineMath>{`and`}</InlineMath><BlockMath>{`b = \\frac{1}{S_{ut}}[\\sqrt{4(K_fM_m)^2 + 3(K_{fs}T_m)^2}]`}</BlockMath><InlineMath>{`Therefore,`}</InlineMath> Substituting a and b in goodman line equation

<BlockMath>{`\\frac{1}{n} = {\\frac{16}{\\pi{d^3}} (a + b)}`}
</BlockMath>

For design purposes, it is also desirable to solve the equation for the diameter. This
results in

<BlockMath>{`d = \\sqrt[3]{{\\frac{16n}{\\pi} (a + b) }}`}
</BlockMath>

                </p>
                </div>
                </div>
            </div>
        );
    }
}
