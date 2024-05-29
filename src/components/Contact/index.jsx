import { useRef ,useState} from 'react';
import { send } from 'emailjs-com';
import styles from './style.module.scss';
import Rounded from '@/components/RoundedButton';
import classNames from 'classnames';
import { useScroll, motion, useTransform } from 'framer-motion';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const [showForm,setShowForm]=useState(true);

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = (data) => {
          send(
              process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
              process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
              {
      from_name: data.from_name,
      from_email: data.from_email,
      message: data.message,
    },
              process.env.NEXT_PUBLIC_EMAIL_USER_ID
          )
          .then((response) => {
            if(response.status===200 && response.text=="OK") {
              setShowForm(false);
            }
          })
          .catch((err) => {
            setShowForm(true);
          });
         
  };


    const x = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const fromNameValue = watch('from_name', '');
    const fromEmailValue = watch('from_email', '');
    const fromMessageValue = watch('message', '');
    return (
        <motion.div ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    
                    <h2>Dreams to <span className='text-accent'>reality</span>? </h2>
                    
                    <h2>Let&apos;s talk!</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                </div>
                <div className={styles.nav}>
                                     
                       <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                       {showForm ?   <>
                            <div className="relative ">
                              <input
                                type="name"
                                name='from_name'
                                className=" w-full xl:w-4/6 peer m-0 block h-[58px] rounded border border-solid border-secondary-500 bg-transparent px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-white focus:outline-none dark:border-neutral-400 dark:text-white dark:focus:border-primary"
                                id="floatingInput"
                               
                                {...register('from_name', { required: 'Name is required' })}
                              />
                              <label
                                htmlFor="floatingName"
                                className={classNames("pointer-events-none absolute left-0 top-0 origin-[0_0] px-3 py-4 text-neutral-500 transition-transform duration-200 ease-linear", {
                                  "peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary": true,
                                  "-translate-y-2 translate-x-[0.15rem] scale-[0.65] text-primary": fromNameValue,
                                  "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 dark:text-neutral-400 dark:peer-focus:text-primary": !fromNameValue,
                              })}>
                                Name
                              </label>
                              <span className="text-red-300">{errors?.from_name?.message}</span>
                            </div>
                            <div className="relative ">
                              <input
                              name="from_email"
                                type="email"
                                className=" w-full xl:w-4/6 peer m-0 block h-[58px] rounded border border-solid border-secondary-500 bg-transparent px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-white focus:outline-none dark:border-neutral-400 dark:text-white dark:focus:border-primary"
                                id="floatingEmail"
                                placeholder="name@example.com"  
                                {...register('from_email', { required: 'Email is required' })}
                                />
                              <label
                                htmlFor="floatingEmail"
                                className={classNames("pointer-events-none absolute left-0 top-0 origin-[0_0] px-3 py-4 text-neutral-500 transition-transform duration-200 ease-linear", {
                                  "peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary": true,
                                  "-translate-y-2 translate-x-[0.15rem] scale-[0.65] text-primary": fromEmailValue,
                                  "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 dark:text-neutral-400 dark:peer-focus:text-primary": !fromEmailValue,
                              })}>
                                Email address
                              </label>
                              <span className="text-red-300">{errors?.from_email?.message}</span>
                            </div>

                            <div className="relative ">
                            <textarea
                            name='message'
                              type="name"
                              className=" w-full xl:w-4/6 peer m-0 block h-[150px] rounded border border-solid border-secondary-500 bg-transparent px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-white focus:outline-none dark:border-neutral-400 dark:text-white dark:focus:border-primary resize-none"
                              id="floatingMessage"
                              rows="6"
                              {...register('message', { required: 'Message is required' })}
                            />
                            <label
                              htmlFor="floatingMessage"
                              className={classNames("pointer-events-none absolute left-0 top-0 origin-[0_0] px-3 py-4 text-neutral-500 transition-transform duration-200 ease-linear", {
                                "peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary": true,
                                "-translate-y-2 translate-x-[0.15rem] scale-[0.65] text-primary": fromMessageValue,
                                "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 dark:text-neutral-400 dark:peer-focus:text-primary": !fromMessageValue,
                            })} >
                              Message
                            </label>
                            <span className="text-red-300">{errors?.message?.message}</span>
                           </div>
                          
                      <button href="#_" className="relative inline-flex z-10 items-center px-10 py-3 overflow-hidden text-lg font-medium text-primary bg-backgroundbkLight border-2 border-primary rounded-[5px] hover:text-white group hover:bg-background ">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        <span className="relative">Send</span>
                      </button>
                     
                    </>
                      :
                      <>              
                        <div className='relative min-h-[400px] flex items-center justify-center border-solid border-2 border-primary py-4 px-4'>  <div class='hoverme absolute left-0'>
                        {Array.from({ length: 50 }).map((_, i) => (
                          <i key={i} />
                        ))}
                        
                        </div>
                        <span>You&apos;re awesome! Thanks for submitting the form.<br/> We&apos;ll be in contact soon.</span>
                        <div class='hoverme absolute right-0'>
                        {Array.from({ length: 50 }).map((_, i) => (
                          <i key={i} />
                        ))}
                      </div>
                      </div>
                     </>
                    }
                     </form>
     

          
        
      
                       <div className={styles.enquiry}>
                            <div className={styles.contactOption}>
                            <div className="items-start">
                                <h3>FURTHER ENQUIRIES OR COLLABORATION</h3>
                            
                                <div className={styles.contact__link}><Link href="mailto:gokulkrish80@gmail.com">gokulkrish80@gmail.com</Link></div>
                                <div className={styles.contact__link}><Link href="https://api.whatsapp.com/send?phone=+919497294324">+91-9497294324</Link></div>
                                </div>
                                {/* <Scene/> */}
                               
                            </div>
                        </div>
                </div>
                <div className={styles.info}>
                    <div>
                
                        <div className={styles.logo}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                    <p className={styles.codeBy}>Code by</p>
                    <p className={styles.firstName}>Gokul</p>&nbsp;
                    <p className={styles.lastName}>Krishnan</p>
                </div>
            </div>


                        
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <p className={styles.hoverUnderline}><Link href='https://in.linkedin.com/in/gokul-krishnan-2000'>Linkedin</Link></p>
                        </span>
                        <p className={styles.hoverUnderline}><Link href='https://www.instagram.com/g.o.g.u_?igsh=MXY3dmNsdmo5OGR5aw=='>Instagram</Link></p>                         
                            <p className={styles.hoverUnderline}><Link href='https://t.me/gooku_12'>Telegram</Link></p>
                       
                       
                          
                       
                    </div>
                </div>
            </div>
        </motion.div>
    )
}