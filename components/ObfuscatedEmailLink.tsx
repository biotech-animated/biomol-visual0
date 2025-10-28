'use client';

import { useEffect, useState } from 'react';

interface ObfuscatedEmailLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ObfuscatedEmailLink({ className, children }: ObfuscatedEmailLinkProps) {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Split the email address into obfuscated parts
    // This prevents bots from easily harvesting the email from HTML source
    const emailParts = {
      // Split "hello" into parts
      userPart1: 'hel',
      userPart2: 'lo',
      // Split "biomolvisual.com" into parts
      domainPart1: 'biomol',
      domainPart2: 'visual',
      domainPart3: '.com'
    };

    // Reassemble the email address client-side
    const username = emailParts.userPart1 + emailParts.userPart2;
    const domain = emailParts.domainPart1 + emailParts.domainPart2 + emailParts.domainPart3;
    const fullEmail = `${username}@${domain}`;

    setEmailAddress(fullEmail);
    setIsLoaded(true);
  }, []);

  // Don't render anything until the email is assembled
  if (!isLoaded) {
    return null;
  }

  return (
    <a 
      href={`mailto:${emailAddress}`} 
      className={className}
      aria-label={`Send email to ${emailAddress}`}
    >
      {children || emailAddress}
    </a>
  );
}
