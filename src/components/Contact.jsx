import React from 'react'
import { openingHours, socials } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Contact = () => {

    useGSAP(() => {

        const titleSplit = SplitText.create('#contact h2', { type: 'words' })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut'
        })

        timeline.from(titleSplit.words, {
            yPercent: 100,
            duration: 1.2,
            stagger: 0.05,
        })
            .from('#contact .content > div', {
                opacity: 0,
                yPercent: 100,
                duration: 1,
                stagger: 0.2,
            })

    })







    return (
        <footer id='contact'>
            <img src='/images/footer-right-leaf.png' alt='leaf-right' id='f-right-leaf' />
            <img src='/images/footer-left-leaf.png' alt='leaf-left' id='f-left-leaf' />

            <div className='content'>
                <h2>Where to Find Us</h2>
                <div>
                    <h3>Visit Our Bar</h3>
                    <p>123 Cocktail Street, Mixville, MM 12345</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>Phone: (254) 796728585</p>
                    <p> hello@mojito.com</p>
                </div>

                <div>
                    <h3>Opening Hours</h3>
                    {openingHours.map((item) => (
                        <p key={item.day}>
                            {item.day}: {item.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Follow Us</h3>
                    <div className='flex-center gap-5'>
                        {socials.map((social) => (
                            <a href={social.url} key={social.name} aria-label={social.name}
                                target='_blank' rel='noopener noreferrer'>
                                <img
                                    key={social.name}
                                    src={social.icon}
                                    alt={social.name}
                                />
                            </a>
                        ))}

                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Contact
