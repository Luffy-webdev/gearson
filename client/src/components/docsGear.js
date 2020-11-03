import React from "react";
import '../style/docs.css';
import 'normalize.css';
import spurg from '../assets/spur-g.PNG';
import helicalg from '../assets/helical-g.PNG';
import bevelg from '../assets/bevel-g.PNG';
import wormg from '../assets/worm-g.PNG';
import nomen from '../assets/nomen.PNG';
import interf from '../assets/interference-g.PNG';
import invcurve from '../assets/inv-curve.svg';
import group12 from '../assets/Group12.svg';
import gearcutting from '../assets/gear_cutting.jpeg';
import helicalcutting from '../assets/helical_cutting.jpg';
import { Link } from 'react-router-dom';
import { InlineMath, BlockMath } from 'react-katex';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'


function DocsGear() {
    const module = `{m} ={\\frac{1}{P}}`;
    const addendum = `{a} ={\\frac{1}{P}}`;
    const dedendum = `{b} ={\\frac{1.153}{P}}`;
    const DiametralPitch = `{P} = {\\frac{1}{m}}`;
    const wholeDepth = `{w_h} = {a + b}`;
    const pitchCircle = `{d_p} ={\\frac{N}{P}}`;
    const baseCircle = `{d_b} ={d_p\\cos\\alpha}`;
    return (

            <div className="container-fluid mt-0 is-black is-operatorMono">
                <div style={{width:"100%"}} className="row is-black">
                    <div className="col-md-12 pt-3 is-light-bold pr-4"><p className="is-white  pt-3 pl-2 doc-gear">A gear is a kind of machine element in which teeth
                    are cut around cylindrical or cone shaped surfaces with equal spacing. By meshing a pair of these elements, they are used to transmit rotations and forces
                    from the driving shaft to the driven shaft. Gears can be classified by shape as involute, cycloidal and trochoidal gears. Also, they can be classified by
                    shaft positions as parallel shaft gears, intersecting shaft gears, and non-parallel and non-intersecting shaft gears.<br /><br />
                    There are many types of gears such as spur gears, helical gears, bevel gears, worm gears, gear rack, etc. These can be broadly classified by looking at the positions
                    of axes such as parallel shafts, intersecting shafts and non-intersecting shafts.<br /><br /><h3 className="pt-1 is-bold is-operatorMono heading-1">Spur Gears</h3><span className="pb-1">Spur gears, have teeth
                    parallel to the axis of rotation and are used to transmit motion from one shaft to another, parallel, shaft. Of all types, the spur gear is the simplest
                    </span><h3 className="pt-4 is-bold is-operatorMono">helical Gears</h3>
                    Helical gears, have teeth inclined to the axis of rotation. Helical
                    gears can be used for the same applications as spur gears and, when so used, are not as
                    noisy, because of the more gradual engagement of the teeth during meshing. The inclined
                    tooth also develops thrust loads and bending couples, which are not present with spur
                    gearing. Sometimes helical gears are used to transmit motion between nonparallel shafts.
                    <h3 className="pt-4 is-bold is-operatorMono">Bevel Gears</h3>
                    Bevel gears, have teeth formed on conical surfaces and are
                    used mostly for transmitting motion between intersecting shafts. The figure actually
                    illustrates straight-tooth bevel gears. Spiral bevel gears are cut so the tooth is no longer
                    straight, but forms a circular arc. Hypoid gears are quite similar to spiral bevel gears
                    except that the shafts are offset and non-intersecting<br />
                    <div className="row is-light-dark pt-5 pb-5">
                        <div className="col-md-3 mt-0">
                            <div className="card  mt-3 pt-2 rounded" style={{width: "auto"}}>
                              <img className="card-img-top" src={spurg} alt="Spur Gear" />
                              <div className="card-body">
                                <p className="card-text is-dark text-center"><mark>Spur Gear</mark></p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-0">
                            <div className="card  mt-3 pt-2 rounded" style={{width: "auto"}}>
                              <img className="card-img-top" src={helicalg} alt="Helical Gear" />
                              <div className="card-body">
                                <p className="card-text is-dark text-center"><mark>Helical Gear</mark></p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-0">
                            <div className="card  mt-3 pt-2 rounded" style={{width: "auto"}}>
                              <img className="card-img-top" src={bevelg} alt="Bevel Gear" />
                              <div className="card-body">
                                <p className="card-text is-dark text-center"><mark>Bevel Gear</mark></p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card  mt-3 pt-2 rounded" style={{width: "auto"}}>
                              <img className="card-img-top" src={wormg} alt="Worm Gear" />
                              <div className="card-body">
                                <p className="card-text is-dark text-center"><mark>Worm Gear</mark></p>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                        <div className="card  mt-3 pt-2 rounded d-block mx-auto" stylr={{width:"auto"}}>
                            <img className="card-img-top" src={nomen} alt="Worm Gear" />
                            <div className="card-body">
                            <p className="card-text is-dark text-center"><mark>Nomenclature</mark></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                    The module m is the ratio of the pitch diameter to the number of teeth. The customary unit of length used is the millimeter. The module is the index of tooth size in SI. <BlockMath>{module}</BlockMath>
                    <br /><br />The diametral pitch P is the ratio of the number of teeth on the gear to the pitch
                    diameter. Thus, it is the reciprocal of the module. Since diametral pitch is used only
                    with U.S. units, it is expressed as teeth per inch.<BlockMath>{DiametralPitch}</BlockMath><br /><br />
                    The addendum a is the radial distance between the top land and the pitch circle.<BlockMath>{addendum}</BlockMath><br /><br />
                    The dedendum b is the radial distance from the bottom land to the pitch circle.<BlockMath>{dedendum}</BlockMath> The
                    whole depth <InlineMath>{"h_t"}</InlineMath> is the sum of the addendum and the dedendum (approx.)<BlockMath>{wholeDepth}</BlockMath><br />
                    The clearance circle is a circle that is tangent to the addendum circle of the mating gear. The clearance c is the amount by which the dedendum in a given gear exceeds
                    the addendum of its mating gear.<BlockMath>{"clearance = (b - a)"}</BlockMath><br /><br /> The backlash is the amount by which the width of a
                    tooth space exceeds the thickness of the engaging tooth measured on the pitch circles.<br /><br />

                    <div className="row mb-5 pb-3">
                        <div className="col-md-7"><p className="is-white is-operatorMono">
                    <h3 className="is-bold is-operatorMono">Conjugate action (figure-1)</h3><br />Assumptions: teeth is perfectly formed, perfectly smooth and rigid.<br /> Such an assumption is, of course,
                    unrealistic, because the application of forces will cause deflections. <br /><br />
                    Mating gear teeth acting against each other to produce rotary motion are similar to
                    cams. When the tooth profiles, or cams, are designed so as to produce a constant angularvelocity ratio during meshing, these are said to have conjugate action.
                    <br/><br/>
                        When one curved surface pushes against another (Fig. 1), the point of contact
                        occurs where the two surfaces are tangent to each other (point c), and the forces at any
                        instant are directed along the common normal ab to the two curves. The line ab, representing the direction of action of the forces, is called the line of action. The line of
                        action will intersect the line of centers O-O at some point P.<br/>The angular-velocity ratio
                        between the two arms is inversely proportional to their radii to the point P. Circles
                        drawn through point P from each center are called pitch circles, and the radius of each
                        circle is called the pitch radius. Point P is called the pitch point.<br/><br/>To transmit motion at a constant angular-velocity ratio, the pitch point must remain
                        fixed; that is, all the lines of action for every instantaneous point of contact must pass
                        through the same point P. In the case of the involute profile, it can be shown that all
                        points of contact occur on the same straight line ab, that all normals to the tooth profiles
                        at the point of contact coincide with the line ab, and, thus, that these profiles transmit
                        <strong> uniform rotary motion</strong>.</p></div>
                        <div className="col-md-4"><img className="img-fluid" src={invcurve} alt=""/></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-7"><h3 className="is-bold is-spin">Involute properties</h3><br/><br/><p>An involute curve may be generated by wrapping a cord d-e-f around a cylinder(as shown in figure-2)<br/>Point b on the chord represents tracing point. As the cord is unwrapped point b traces the <strong>involute curve a-c</strong><br/>
                        For more detailed explanation and how to generate an involute curve visit this <Link to='/involute'>link</Link></p></div>
                        <div className="col-md-4"><img src={group12} className="img-fluid" alt=""/></div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-7"><h3 className="is-bold">Interference</h3><p className="is-spin">Now since points of tangency of the pressure line with the base circles C
                        and D are located inside of points A and B. Interference is present.<br/><br />
                        The interference is explained as follows. Contact begins when the tip of the driven
                        tooth contacts the flank of the driving tooth. In this case the flank of the driving tooth
                        first makes contact with the driven tooth at point A, and this occurs before the involute
                        portion of the driving tooth comes within range. In other words, contact is occurring
                        below the base circle of gear 2 on the noninvolute portion of the flank. The actual effect
                        is that the involute tip or face of the driven gear tends to dig out the noninvolute flank
                        of the driver.<br/><br/>In this example the same effect occurs again as the teeth leave contact. Contact
                        should end at point D or before. Since it does not end until point B, the effect is for the
                        tip of the driving tooth to dig out, or interfere with, the flank of the driven tooth.
                        When gear teeth are produced by a generation process, interference is automatically eliminated because the cutting tool removes the interfering portion of the flank.
                        This effect is called undercutting; if undercutting is at all pronounced, the undercut
                        tooth is considerably weakened. Thus the effect of eliminating interference by a generation process is merely to substitute another problem for the original one.<br/><br/><br/>
                        The smallest number of teeth on a spur pinion and gear,1 one-to-one gear ratio,
                        which can exist without interference is <InlineMath>{`N_p`}</InlineMath>. This number of teeth for spur gears is given by:<BlockMath>{`{c} = {\\frac{2k}{3\sin^2(\\phi)}}`}</BlockMath> <BlockMath>{`{N_p} = {c{(1 + \\sqrt(1+\\frac{2k}{c}))}}`}</BlockMath>where k = 1, for full-depth teeth and 0.8 for stub teeth and
                        <InlineMath>{`{\\phi} = {pressure{\\space}angle}`}</InlineMath> <br />
                        For a <InlineMath>{`20\\degree`}</InlineMath> pressure angle, with k = 1,<BlockMath>{`{c} = {\\frac{2(1)}{3\sin^2(20\\degree)}}`}</BlockMath><BlockMath>{`{N_p} = {c{(1 + \\sqrt(1+\\frac{2(1)}{c}))}}`}</BlockMath>which comes out to be <InlineMath>{`{N_p} = 12.3 = 13`}</InlineMath><br/>
                        Thus 13 teeth on pinion and gear are interference-free. Notice that 12.3 teeth is possible in meshing arcs, but for fully rotating gears, 13 teeth represents the least number.<br/>For a <InlineMath>{`14{\\frac{1}{2}\\degree}`}</InlineMath>
                        pressure angle, <InlineMath>{`N_p`}</InlineMath> = 23 teeth, so one can appreciate why few <InlineMath>{`14{\\frac{1}{2}\\degree}`}</InlineMath> tooth
                        systems are used, as the higher pressure angles can produce a smaller pinion with accompanying smaller center-to-center distances.<br/><br/>
                        If the mating gear has more number of teeth than pinion or if value of gear reduction <InlineMath>{`{\\not = 1}`}</InlineMath> <br/>If,
                        <InlineMath>{`reduction = {\\frac{m_G}{m_P}}`}</InlineMath>, then the smallest number of teeth on the pinion without interference is given by
                        <BlockMath>{`{c} = {\\frac{2k}{(1+2m)\sin^2(\\phi)}}`}</BlockMath>
                        <BlockMath className="katex" style={{fontSize:"0.2em"}}>{`{N_p} = {c{(m + \\sqrt(m^2+\\frac{2k}{c}))}}`}</BlockMath>
                        For example, if m = 4 and <InlineMath>{`\\phi = {20\\degree}`}</InlineMath>,
                        <BlockMath>{`{c} = {\\frac{2(1)}{(1+2(4))\sin^2(20\\degree)}}`}</BlockMath>and
                        <BlockMath>{`{N_p} = {c{(4 + \\sqrt((4)^2+\\frac{2(1)}{c}))}}`}</BlockMath><InlineMath>{`N_p`}</InlineMath>comes out to be 15.4 ( or <InlineMath>{`N_p = 16`}</InlineMath>)<br/>
                        Thus a 16-tooth pinion will mesh with a 64-tooth gear without interference.
                        </p></div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-image-top img-fluid" src={interf} />
                                <div className="card-body">
                                <p className="card-text is-dark is-apro is-bold">two 16-tooth gears that have been cut to
                                    obsolete <InlineMath>{`14{\\frac{1}{2}}`}</InlineMath> ◦ pressure angle. The driver, gear 2, turns clockwise. The initial and final points of contact are designated A and B, respectively, and are located on the pressure line.</p>
                                </div>
                                </div>
                            </div>
                        <div className="col-md-1"></div>
                        <div className="row">
                            <div className="col-md-5"><h3 className="is-bold is-spin pt-5">Forming of Gear Teeth</h3>
                                <p>There are a large number of ways of forming the teeth of gears, such as sand casting,
                                shell molding, investment casting, permanent-mold casting, die casting, and centrifugal
                                casting. Teeth can also be formed by using the powder-metallurgy process; or, by using
                                extrusion, a single bar of aluminum may be formed and then sliced into gears. Gears
                                that carry large loads in comparison with their size are usually made of steel and are cut
                                with either form cutters or generating cutters. In form cutting, the tooth space takes the
                                exact form of the cutter. In generating, a tool having a shape different from the tooth
                                profile is moved relative to the gear blank so as to obtain the proper tooth shape. One
                                of the newest and most promising of the methods of forming teeth is called cold forming,
                                or cold rolling, in which dies are rolled against steel blanks to form the teeth. The
                                mechanical properties of the metal are greatly improved by the rolling process, and a
                                high-quality generated profile is obtained at the same time.</p>
                            </div>
                            <div className="col-md-2 pt-5">
                               <div className="card" style={{width:"auto"}}>
                                 <img src={helicalcutting} className="card-img-top img-fluid" alt=""/>
                               </div>
                            </div>
                            <div className="col-md-2 pt-5">
                               <div className="card" style={{width:"auto"}}>
                                 <img src={gearcutting} className="card-img-top img-fluid" alt=""/>
                               </div>
                            </div>

                        </div>

                    </div>
                    </p>
                    </div>
                </div>
            </div>


    );
}

export default DocsGear;