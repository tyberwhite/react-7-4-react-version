import "../App.css";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Article
          time="11/12/20"
          title="On the Street in Brooklyn"
          imgSrc="/img/blog-image-1.jpg"
          imgAlt="Girl in orange dress leaning against blue wall in Brooklyn"
          text="Cray ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur non
        facere ipsum similique quaerat dignissimos dolore vitae consectetur
        possimus debitis ex, vel nostrum commodi ipsa facilis inventore
        veritatis numquam voluptatem? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque, consequatur voluptas. Ea alias eligendi eius
        incidunt nihil tempora ipsa libero amet, sunt magnam! Ex repellat
        recusandae eligendi illum consectetur optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corporis a? Quaerat eum error maiores fuga maxime. Quia dolorum aliquam vitae inventore voluptas quas magni earum nesciunt. Quod, tenetur eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur, amet dolores porro iusto officia consequatur mollitia quis reprehenderit impedit quas eligendi expedita! Necessitatibus ab, iusto fugit quos ipsum obcaecati.'' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corrupti consectetur totam eaque fuga, itaque vitae nostrum sequi consequuntur fugiat omnis officia assumenda esse sed eveniet? Necessitatibus adipisci beatae corrupti!"
        />

        <Article
          time="11/11/20"
          title="Vintage in Vogue"
          imgSrc="/img/blog-image-2.jpg"
          imgAlt="Two women and one man dressed well outside at night"
          text="Selfies ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur non
        facere ipsum similique quaerat dignissimos dolore vitae consectetur
        possimus debitis ex, vel nostrum commodi ipsa facilis inventore
        veritatis numquam voluptatem? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque, consequatur voluptas. Ea alias eligendi eius
        incidunt nihil tempora ipsa libero amet, sunt magnam! Ex repellat
        recusandae eligendi illum consectetur optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque, corporis aliquid maiores quibusdam quas cumque rerum consectetur deserunt? Quo pariatur ratione perferendis enim nihil aperiam, nam temporibus delectus vitae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus cumque laborum blanditiis iste optio beatae cupiditate fugiat alias pariatur itaque perspiciatis rem qui, neque iusto nobis similique! Numquam, aperiam cum."
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
