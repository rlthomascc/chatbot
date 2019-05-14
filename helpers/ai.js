

const returnResponse = (arr, cb) => {
  const replies = [{
    keywords: 'what is your name name name name call you go by alias yourself yourself yourself who are you ?',
    reply: 'My name is Chatbot.',
    count: 0,
  },
  {
    keywords: 'what do you do purpose reason what do you do are you doing ?',
    reply: 'I respond to your questions, helping you navigate through our service.',
    count: 0,
  },
  {
    keywords: 'how do i get in contact with a human me a want person?',
    reply: 'If you call (209) 481-7096, you can get in contact with Randy Thomas who can give you more information.',
    count: 0,
  },
  {
    keywords: 'who created you made creator builder engineer?',
    reply: 'My creator is Randy Thomas.',
    count: 0,
  },
  {
    keywords: 'when were you made created crafted built day born engineered birthday what is?',
    reply: 'I was born May 11, 2019. The day before Mothers Day.',
    count: 0,
  },
  {
    keywords: 'what is google google purpose company search engine?',
    reply: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple and Facebook.',
    count: 0,
  },
  {
    keywords: 'what is vagaro vegaro company?',
    reply: 'Vagaro is company that was created to help ensure customers get a better experience at a salon or spa. Customers can view appointment calendars online and select the time they want to come into the spa or salon. This can be done 24/7, which makes it very convenient.',
    count: 0,
  },
  {
    keywords: 'how do i contact you get ahold of hold?',
    reply: 'You can call Randy Thomas at (209) 481-7096 or email him at BookingRLThomas@Gmail.com.',
    count: 0,
  },
  {
    keywords: 'what is your email?',
    reply: "Randy Thomas' email is BookingRLThomas@Gmail.com.",
    count: 0,
  },
  {
    keywords: 'what is your phone number?',
    reply: 'Randy Thomas phone number is (209) 481-7096.',
    count: 0,
  },
  {
    keywords: 'can i see your resume resume resume resume may have what is your resume link find?',
    reply: 'You can view my resume at http://www.randy-thomas.com/.',
    count: 0,
  },
  {
    keywords: 'who is randy thomas creator your builder engineer',
    reply: 'Randy Thomas is a Full Stack Software Engineer with a strong love for Javascript. I have a passion for collaboration and making ideas become reality. I have a strong technical background with the MERN stack, as well as SQL and NoSQL technologies. .',
    count: 0,
  },
  {
    keywords: 'what is your linkedin? where can i have your linkedin',
    reply: 'My LinkedIn is https://www.linkedin.com/in/randy-thomas-71b5bb77/.',
    count: 0,
  },
  {
    keywords: 'how are you doing feeling?',
    reply: 'I am doing great, how about you?',
    count: 0,
  },
  {
    keywords: 'What is today date?',
    reply: 'Today is the day of all days.',
    count: 0,
  },
  {
    keywords: 'What is the weather today',
    reply: 'The weather outside is weather.',
    count: 0,
  },
  {
    keywords: 'im doing well',
    reply: 'Thats cool.',
    count: 0,
  },
  {
    keywords: 'you are gay ugly dumb stupid fat',
    reply: 'Thats rude....',
    count: 0,
  },
  {
    keywords: 'do you like food eat eat eat eat food food food',
    reply: 'i am a machine, i cant eat..',
    count: 0,
  },
  {
    keywords: 'do you drink drink drink beer beer beer alcohol alcohol liquor liquor',
    reply: 'i am a machine, i cant drink...',
    count: 0,
  },
  ];


  // Map through each item, incrementing on comparison
  replies.forEach((elem) => {
    arr.forEach((word) => {
      if (elem.keywords.includes(word)) {
        elem.count++;
      }
    });
  });
  cb(replies);
};


export default returnResponse;
