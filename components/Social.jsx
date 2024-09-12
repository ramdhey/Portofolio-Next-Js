import Link from "next/link";
import { FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa"

const socials=[
  {icon:<FaGithub/>, path:"https://github.com/ramdhey"},
  {icon:<FaLinkedin/>, path:"https://www.linkedin.com/in/rama-dhea-yudhistira-058b46229/"},
  {icon:<FaInstagram/>, path:"https://www.instagram.com/ramdhey_/"},
]

const Social = ({
  containerStyles,iconStyles
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{
        return(
          <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
            {item?.icon}
          </Link>
        )
      })}
    </div>
  );
};

export default Social;
