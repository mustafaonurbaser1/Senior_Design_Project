import svg1 from '../../images/svg-2.svg'
import svg2 from '../../images/svg-1.svg'
import svg4 from '../../images/svg-4.svg'

export const homeObjOne = {
    id:'about',
    lightBg:false,
    lightText:true,
    lightTextDesc:true,
    topLine: 'Premium Bank',
    headLine:"Don't forget your jobs",
    description: 'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.',
    buttonLabel:'Get started',
    imgStart:false,
    img: svg1,
    alt:'Car',
    dark:true,
    primary:true,
    darkText:false
};

export const homeObjTwo = {
    id:'discover',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine: 'Add Events',
    headLine: "Meet people with same enjoyment.",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus viverra pulvinar. Aliquam vitae libero felis. Cras quis nibh posuere, maximus arcu id, tincidunt metus. Etiam ac elementum dui. Pellentesque volutpat quam quam, vitae mattis metus elementum sit amet. Nullam a placerat augue.',
    buttonLabel:'Learn More',
    imgStart:true,
    img: svg4,
    alt:'PiggyBank',
    dark:false,
    primary:false,
    darkText:true
};

export const homeObjThree = {
    id:'signup',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine: 'No Cost',
    headLine:'Free For Ever',
    description: 'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.',
    buttonLabel:'Start Now',
    imgStart:false,
    img: svg2,
    alt:'login',
    dark:false,
    primary:true,
    darkText:true
};