import { Link } from "react-router-dom";
import "./styles/about.css"

const About = () => {
  return (
    <div className="about"> 
      <h1>About Semitone</h1>
      <div className="body-content">
        <div className="about-scrollpane">
          <p className="about-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus molestiae velit voluptatibus quisquam animi consectetur quam dolorem praesentium, cum suscipit nostrum laboriosam distinctio ut, maiores optio exercitationem unde possimus consequatur non quos obcaecati repudiandae quae omnis. Veniam quos error suscipit possimus nesciunt tenetur, ipsum eius dignissimos illum laboriosam odit officia praesentium labore dicta quidem earum pariatur dolorum, voluptas neque quia, quasi quo magnam. Earum dicta eveniet repudiandae facilis? Perspiciatis culpa saepe qui placeat id est distinctio maiores voluptatum cumque eius dolores rem nemo similique facere delectus dolorem neque, doloremque, explicabo deleniti ab amet, ullam accusantium sapiente. Corporis hic pariatur optio praesentium consequuntur eius, iste amet. Odit voluptas consequuntur placeat tenetur consequatur nulla quia aliquam magnam assumenda impedit nemo nisi aspernatur quibusdam voluptatibus modi odio, debitis, alias eius tempore reprehenderit maiores eligendi commodi officiis. Nemo numquam suscipit totam voluptas obcaecati veniam illum quod rerum quas earum nulla alias quam cupiditate, odio, animi illo sequi rem cumque et iste deserunt. Quae dignissimos placeat iste sequi molestiae tempora vel nisi quia officia cum, mollitia rerum culpa eius esse itaque ea, quos magnam. Atque odio adipisci quia ipsum eveniet sed! Perferendis repellendus aspernatur cupiditate voluptates voluptatem voluptas dicta tempore, cumque quod pariatur! Commodi optio ut voluptates. Repellat laborum perspiciatis temporibus hic itaque iste? Odit iusto odio repellat earum, velit tenetur cumque cum dolore architecto nemo quos soluta assumenda ut error necessitatibus quasi itaque reiciendis quis voluptas officiis debitis cupiditate deserunt. Dicta est expedita aperiam deserunt ullam, in cupiditate qui error excepturi hic provident nesciunt, magnam tempore pariatur, consequatur exercitationem incidunt nisi. Sapiente harum error corporis dignissimos numquam eveniet nostrum molestias doloremque minima, sint, excepturi placeat deserunt, in aut unde provident ratione nam. Mollitia repellendus asperiores expedita exercitationem distinctio, placeat hic neque nostrum deleniti saepe. Mollitia incidunt iusto odio quos, tempora dignissimos consectetur optio, eligendi nisi culpa dolor! Error facilis architecto a ipsam iusto ratione harum, provident expedita soluta suscipit at praesentium exercitationem, accusantium velit fugit amet voluptates minima saepe officiis nesciunt sint ducimus debitis. Labore nulla ex dolorem omnis possimus vero velit ipsum, officiis est iure sed animi praesentium fugit ea voluptate totam quos explicabo, dicta aut ipsa! Eos voluptas provident soluta doloribus cupiditate qui ab earum. Quas exercitationem omnis alias, nam soluta a maiores provident aperiam qui et, deleniti cumque repellat. Minima, at! Iste assumenda delectus dignissimos tempore optio nesciunt magnam eum in nihil reprehenderit esse consequuntur laborum cumque earum, quod quo. Vitae reiciendis reprehenderit, sed tempore officiis excepturi facilis ipsa quia adipisci architecto et? Sit labore incidunt nobis vel tempora minus, at aperiam cum molestias laudantium ex omnis eos magni! Eveniet, dolorem eligendi ea soluta autem delectus, commodi doloribus eos sunt omnis ullam alias, tenetur voluptatem quae repellendus quisquam cumque! Distinctio, rerum blanditiis. Veritatis repellendus iusto ratione odio architecto doloremque eveniet, alias officia obcaecati molestiae nihil aut dolorum dicta quis, adipisci, accusantium repudiandae autem maxime minima veniam eaque quasi harum! Dolorum sequi facilis quisquam doloremque incidunt assumenda nulla veritatis alias itaque quos obcaecati illum sit, beatae vitae cupiditate, cumque tempora! Odio!
          </p>
        </div>
        <div className="info-pane">
          <h3>Phone Number</h3>
          <h3>Street Address</h3>
          <h3>Email Address</h3>
          <h3>Hours of Operation</h3>
          <Link to="/Terms">
            <h3>Terms and Conditions</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
 
export default About;
