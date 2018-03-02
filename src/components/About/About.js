import React, { Component } from 'react';
import './About.css';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';
import Map from './map'
import "./../../animate.css";
import Fade from 'react-reveal'

class About extends Component {

    render() {


        return (
            <div className='main_about-container'>
                <NavBar />
                <div className='main_beer-content'>
                    <div id='information-right' className='information-right'>
                        {/* Google map div */}
                        <div id='map'><Map /></div>

                        <div className='pouring-hours'>
                            <h2> Pouring Hours: </h2>
                            <ul className='hours-list'>
                                <ul>Mon     12:00 - 8:45</ul>
                                <ul>Tues   12:00 - 8:45</ul>
                                <ul>Wed 12:00 - 8:45</ul>
                                <ul>Thurs  12:00 - 8:45</ul>
                                <ul>Fri    12:00 - 8:45</ul>
                                <ul>Sat  12:00 - 8:45</ul>
                                <ul>Sun    12:00 - 8:45</ul>
                            </ul>
                        </div>
                        <div id='tap-beers' className='tap-beers'>
                            <h2>BEERS ON TAP:</h2>
                            <ul className='on_tap-list'>
                                <ul>MVP</ul>
                                <ul>MAD MACEY</ul>
                                <ul>New California Republic</ul>
                            </ul>
                        </div>
                    </div>
                    <div className='about-container' >
                        {/* <ScrollAnimation animateIn='fadeIn'> */}
                        <div className='about-header'><h1> Our story -</h1></div>
                        <div className='about-content'>
                            <Fade bottom>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet eu nisl id aliquam. Pellentesque eu viverra magna,
                        quis placerat nisi. Nullam venenatis sapien vel mi ornare, ut venenatis est tincidunt. Aenean tempor odio vitae interdum viverra.
                        Donec aliquam diam vel semper aliquet. Phasellus in sapien eu lacus sollicitudin volutpat. Sed volutpat eros et massa viverra malesuada
                        sed in arcu. Sed fringilla maximus scelerisque. Aenean dictum purus suscipit lacus tempus sodales in non tortor. Fusce vestibulum lacus
                    vitae dolor interdum, eget consequat turpis porttitor. Morbi non massa sed sapien hendrerit mattis.</p>
                         
                            <br />
                            
                                <p>Sed urna neque, auctor elementum blandit
                    at, ultricies non purus. Suspendisse sed rhoncus urna. Sed id lectus at arcu rhoncus ullamcorper. Aliquam ipsum est, sodales vel tincidunt
                    eget, elementum condimentum ipsum. Aenean efficitur metus sodales sem fermentum, non pellentesque odio tempor. Sed euismod, nulla ut ultricies
                    scelerisque, eros nisl fringilla libero, a ornare enim purus vel est. Sed ut ornare dui. Curabitur mauris dui, bibendum et felis nec, tempus
                    lacinia felis. Pellentesque at nunc vel ante lobortis fringilla a quis lacus. Nunc eget ante nisi. In vel risus convallis, pharetra ante vel,
                    semper sapien. Nulla quis lorem sed nulla tristique dictum. Mauris a rutrum ex. Aenean vel pretium augue. Ut sit amet libero quis arcu blandit rhoncus.
                    Sed eros eros, mattis sit amet viverra non, commodo id turpis. Nulla facilisi. Nunc dignissim feugiat finibus.</p>
                            </Fade>
                            <br />
                            <Fade bottom>
                                <p>Fusce non nunc elementum, rutrum metus eu,
                   ullamcorper urna. Suspendisse potenti. Aenean finibus facilisis convallis. Curabitur pretium, mi luctus ornare ultricies, erat arcu condimentum nibh, a
                   aliquet magna erat vitae dui. Aenean condimentum sed nisl ut consequat. Proin lobortis rutrum orci at pretium. In ullamcorper, ex nec vestibulum porttitor,
                   erat arcu efficitur dui, nec convallis nisi metus sit amet metus. Nullam vitae interdum dui. Vestibulum gravida ultrices nisl sed tempor. Nam molestie, elit
                   at ultrices varius, magna felis placerat purus, et scelerisque quam mauris feugiat est. Suspendisse vehicula tempus congue. Maecenas at magna diam.
                   Nullam congue dui ac eros sagittis, in sagittis odio elementum. Aliquam bibendum fringilla nunc, eget ornare sem sodales suscipit. Integer tincidunt
                    neque eu urna cursus dictum. Pellentesque massa nunc, hendrerit ut egestas vitae, lacinia a magna. </p>
                                <br />

                                <p>Suspendisse eu eleifend velit, in congue ipsum. Sed sit amet diam vitae dui volutpat laoreet. Sed vulputate pellentesque mauris at ullamcorper.
                    Quisque bibendum tortor luctus magna interdum elementum. Integer vitae erat velit. Mauris suscipit consequat massa, id dapibus nisl venenatis vel. Integer ut
                    ullamcorper felis, eget sagittis neque. Praesent nec libero ut nisi pharetra rutrum et molestie felis. Aenean
                    condimentum leo vel ligula mattis vehicula. Quisque ligula est, aliquet at mauris eget, molestie aliquet dolor. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Pellentesque arcu enim, placerat in ex sit amet, bibendum pellentesque velit. Morbi vel justo ut odio condimentum consectetur vitae vel ipsum.
                     Curabitur molestie nibh quis erat finibus, ut auctor odio scelerisque. Aliquam erat volutpat. Cras eget rhoncus nisi, eget euismod nibh.</p>
                            

                            
                                <p>Sed urna neque, auctor elementum blandit
                        at, ultricies non purus. Suspendisse sed rhoncus urna. Sed id lectus at arcu rhoncus ullamcorper. Aliquam ipsum est, sodales vel tincidunt
                        eget, elementum condimentum ipsum. Aenean efficitur metus sodales sem fermentum, non pellentesque odio tempor. Sed euismod, nulla ut ultricies
                        scelerisque, eros nisl fringilla libero, a ornare enim purus vel est. Sed ut ornare dui. Curabitur mauris dui, bibendum et felis nec, tempus
                        lacinia felis. Pellentesque at nunc vel ante lobortis fringilla a quis lacus. Nunc eget ante nisi. In vel risus convallis, pharetra ante vel,
                        semper sapien. Nulla quis lorem sed nulla tristique dictum. Mauris a rutrum ex. Aenean vel pretium augue. Ut sit amet libero quis arcu blandit rhoncus.
                    Sed eros eros, mattis sit amet viverra non, commodo id turpis. Nulla facilisi. Nunc dignissim feugiat finibus.</p>
                                <br />
                            </Fade>
                            <Fade bottom>
                                <p>Fusce non nunc elementum, rutrum metus eu. Sed urna neque, auctor elementum blandit
                       at, ultricies non purus. Suspendisse sed rhoncus urna. Sed id lectus at arcu rhoncus ullamcorper. Aliquam ipsum est, sodales vel tincidunt
                       eget, elementum condimentum ipsum. Aenean efficitur metus sodales sem fermentum, non pellentesque odio tempor. Sed euismod, nulla ut ultricies
                       scelerisque, eros nisl fringilla libero, a ornare enim purus vel est. Sed ut ornare dui. Curabitur mauris dui, bibendum et felis nec, tempus
                       lacinia felis. Pellentesque at nunc vel ante lobortis fringilla a quis lacus. Nunc eget ante nisi. In vel risus convallis, pharetra ante vel,
                       semper sapien. Nulla quis lorem sed nulla tristique dictum. Mauris a rutrum ex. Aenean vel pretium augue. Ut sit amet libero quis arcu blandit rhoncus.
                    Sed eros eros, mattis sit amet viverra non, commodo id turpis. Nulla facilisi. Nunc dignissim feugiat finibus.</p>
                            </Fade>
                            <br />
                            <br />
                            <Fade bottom>
                                Cheers -
                    <br />
                                <p>The Family at Mad Macey Brewing</p>
                            </Fade>
                        </div>
                        {/* </ScrollAnimation> */}

                    </div>
                    <div className='spacer'></div>
                    <div className='spacer'></div>
                    <div className='spacer'></div>
                    <BottomNav />
                </div>
            </div >
        )
    }
}

export default About;