import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "./styles/purchaseconf.css"

const PurchaseConf = () => {
  return (
    <div className="purchase-confirmation"> 
      <Helmet>
        <title>Purchase Confirmation | Semitone Musical Instruments and Repairs</title>
      </Helmet>
      <h1>Purchase Confirmation</h1>
      <div className="purchase-details">
        <h2>Review the details of your purchase:</h2>
        <p className="purchase-details-paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatibus non optio ex cumque! Iusto nobis consequuntur obcaecati, quae exercitationem, necessitatibus possimus neque, esse a voluptas mollitia. Cum incidunt sunt consectetur fuga animi dolorem vel esse harum, quaerat quam odit inventore consequuntur, maiores delectus placeat autem? Aliquam, deserunt repellendus possimus esse labore doloribus quaerat fugiat excepturi magnam quibusdam soluta dolor id earum quam alias aperiam officia molestiae corrupti! Itaque soluta sit laboriosam dicta vitae reprehenderit dolor, ex laborum est illo sunt. Pariatur consequuntur provident perferendis officia dolor reiciendis soluta doloremque quam! Ab laborum alias incidunt dolor? Officia aliquid maxime itaque ex omnis labore asperiores perspiciatis blanditiis totam nesciunt consectetur, natus quaerat eveniet nobis commodi tempora reiciendis delectus cupiditate provident? Aspernatur facilis, dicta, obcaecati doloribus voluptate rerum dignissimos minus ea ullam cumque unde, expedita est molestias alias! Magnam dolores voluptate ullam, sunt expedita ut saepe molestiae impedit vel eius aperiam nisi tempore reprehenderit ipsum sit, neque exercitationem? Consectetur assumenda sint quis tempore, earum, qui fugiat similique rem expedita, voluptatum id doloremque culpa in ullam. Iure odio id, rem quo perspiciatis nulla laudantium sapiente vitae atque, molestias magni eligendi earum magnam eos, expedita iusto cupiditate assumenda explicabo culpa tempora. Ut cumque architecto iste, quasi nesciunt dolorem nisi reprehenderit sequi ullam, eligendi vel error illo molestiae fugit, obcaecati debitis laborum. A tempora, neque recusandae dicta quasi provident porro reiciendis autem ab et, ad, ex placeat sed animi at? Fuga aut officiis nemo, eos neque quibusdam dignissimos, laborum quisquam soluta qui consequuntur dolor non.
        </p>
      </div>
      <Link to="/semitone-react-site-final">
        <button className="go-home">Go Home</button>
      </Link>
    </div>
  );
}
 
export default PurchaseConf;
