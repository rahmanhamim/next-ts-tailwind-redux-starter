const Footer = () => {
  return (
    <footer className="container border-t border-gray-300 py-4 mt-8">
      <p className="text-center text-gray-400 text-xs">
        All rights reserved &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
