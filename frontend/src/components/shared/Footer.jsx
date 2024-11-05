import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/Amit-Verma5262" className="hover:text-gray-400" aria-label="GitHub" target="_blank">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0.297C5.371 0.297 0 5.668 0 12.297c0 5.301 3.438 9.8 8.205 11.387.599.111.82-.26.82-.578 0-.287-.011-1.243-.016-2.25-3.338.725-4.043-1.429-4.043-1.429-.546-1.389-1.333-1.758-1.333-1.758-1.088-.744.083-.729.083-.729 1.205.085 1.839 1.239 1.839 1.239 1.07 1.833 2.809 1.304 3.492.997.108-.775.419-1.305.763-1.606-2.665-.303-5.467-1.332-5.467-5.933 0-1.31.468-2.382 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.988-.4 3.01-.404 1.022.004 2.05.137 3.012.404 2.29-1.552 3.297-1.23 3.297-1.23.656 1.653.245 2.874.12 3.176.771.839 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.478 5.921.431.371.815 1.103.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.826.576C20.565 22.092 24 17.595 24 12.297c0-6.629-5.373-12-12-12z"/></svg>
            </a>

            <a href="https://x.com/AmitVerma7062" className="hover:text-gray-400" aria-label="Twitter" target="_blank">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/amit-verma-1b5677249/" className="hover:text-gray-400" aria-label="LinkedIn" target="_blank">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
