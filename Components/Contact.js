import { Stack, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { userinfo, headings, ctaTexts } from '../Constants/userinfo';
import emailjs from 'emailjs-com';

const Contact = ({ currentTheme }) => {
  const toast = useToast();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const iconStyles = {
    backgroundColor: currentTheme.tertiary,
    color: '#101010',
    boxShadow: currentTheme.boxShadow,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'CLAP IT',  
      from_name: name,         
      from_email: email,       
      message: message,         
    };

    emailjs.send('service_rllrreu', 'template_xm5hpkn', templateParams, 'MIBYbIcXK2xnIWlrP')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast({
          description: "Message sent successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }, (err) => {
        console.error('FAILED...', err);
        toast({
          description: "Message sending failed!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactHeading}>
        <h2 className={styles.contact}>{headings.contact}</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.form} style={{ borderColor: currentTheme.text, backgroundColor: currentTheme.name === 'light' ? '#fafafa' : 'transparent' }}>
        <Stack spacing={4}>
          <Input type="text" name="name" value={name} placeholder="Your Name" focusBorderColor={currentTheme.tertiary} isRequired autoComplete="off" onChange={(e) => setName(e.target.value)} />
          <Input type="email" name="email" value={email} placeholder="yourname@email.com" focusBorderColor={currentTheme.tertiary} autoComplete="off" isRequired onChange={(e) => setEmail(e.target.value)} />
          <Input type="tel" name="phone" value={phone} placeholder="Phone Number" focusBorderColor={currentTheme.tertiary} autoComplete="off" isRequired onChange={(e) => setPhone(e.target.value)} />
          <Textarea
            placeholder="Message for me!"
            resize="vertical"
            focusBorderColor={currentTheme.tertiary}
            isRequired
            value={message}
            autoComplete="off"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div>
            <div className={styles.submit} style={{ backgroundColor: currentTheme.tertiary }}>
              <button type="submit">{ctaTexts.submitBTN}</button>
            </div>
          </div>
        </Stack>
      </form>

      <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
        <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`}><h1>{userinfo.contact.email}</h1></Link>
      </div>
      {
        userinfo.contact.phone ?
          <div style={{ textAlign: 'center', paddingTop: '0.2rem', color: currentTheme.tertiary }}>
            <Link href={`tel:${userinfo.contact.countrycode}${userinfo.contact.phone}`}><h1>{`${userinfo.contact.countrycode}${userinfo.contact.phone}`}</h1></Link>
          </div> : null
      }
      <div className={styles.socialIconDiv}>
        {userinfo.socials &&
          userinfo.socials.map((social, key) => (
            <div className={styles.socialIcon} style={iconStyles} key={key}>
              <Link href={social.link}><h1><FontAwesomeIcon icon={social.icon} /></h1></Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Contact;
