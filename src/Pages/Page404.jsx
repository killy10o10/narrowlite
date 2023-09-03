import { Link } from 'react-router-dom';

function Page404() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-5 text-center p-2">
      <img src="https://emojicdn.elk.sh/🔍?style=samsung" alt="" />
      <h3 className='text-2xl italic'>Sorry, the page you were looking for was not found</h3>
      <Link to="/">
        <button className='btn btn-error'>Return to Home</button>
      </Link>
    </section>
  );
}

export default Page404;
