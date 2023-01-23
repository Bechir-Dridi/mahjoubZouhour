import React from 'react'
//import imgs:
import f1 from "./media/flower/1.jpg"
import f2 from "./media/flower/2.jpg"
import f3 from "./media/flower/3.jpg"
import f4 from "./media/flower/4.jpg"
import f5 from "./media/flower/5.jpg"
import f6 from "./media/flower/6.jpg"
import f7 from "./media/flower/7.jpg"
import f8 from "./media/flower/8.jpg"
import f9 from "./media/flower/9.jpg"
import f10 from "./media/flower/10.jpg"
import f11 from "./media/flower/11.jpg"
import f12 from "./media/flower/12.jpg"
import f13 from "./media/flower/13.jpg"
import f14 from "./media/flower/14.jpg"

import ta from "./media/tree/a.jpg"
import tb from "./media/tree/b.jpg"
import tc from "./media/tree/c.jpg"
import td from "./media/tree/d.jpg"
import te from "./media/tree/e.jpg"
import tf from "./media/tree/f.jpg"
import tg from "./media/tree/g.jpg"


export default function Plants() {
    return (
        <div className='plants'>
            <section className="zouhour">
                <h1 className="title">Notre pépinière vous offre une large gamme de fleurs</h1>
                <div className="zouhour-collection">
                    <div className="flower-container"><img src={f1} alt="" className="flower" /></div>
                    <div className="flower-container"><img src={f2} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f3} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f4} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f5} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f6} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f7} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f8} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f9} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f10} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f11} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f12} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f13} alt="" className="flower" /> </div>
                    <div className="flower-container"><img src={f14} alt="" className="flower" /> </div>
                </div>
            </section>
            <section className="trees">
                <h1 className="title">Nous offrons aussi une variété d'arbres fruitiers</h1>
                <div className="tree-collection">
                    <div className="tree-container"><img src={ta} alt="" className="tree" /> </div>
                    <div className="tree-container"><img src={tb} alt="" className="tree" /> </div>
                    <div className="tree-container"><img src={tc} alt="" className="tree" /> </div>
                    <div className="tree-container"><img src={td} alt="" className="tree" /> </div>
                    <div className="tree-container"><img src={te} alt="" className="tree" /> </div>
                    <div className="tree-container"><img src={tf} alt="" className="tree" /> </div>
                    <div className="tree-container"><img src={tg} alt="" className="tree" /> </div>

                </div>
            </section>
        </div>
    )
}
