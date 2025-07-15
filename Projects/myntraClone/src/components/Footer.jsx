const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 pt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Online Shopping */}
        <div>
          <h3 className="font-semibold mb-3">ONLINE SHOPPING</h3>
          <ul className="space-y-1">
            {["Men", "Women", "Kids", "Home", "Beauty", "Genz", "Gift Cards", "Myntra Insider"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Customer Policies */}
        <div>
          <h3 className="font-semibold mb-3">CUSTOMER POLICIES</h3>
          <ul className="space-y-1">
            {["Contact Us", "FAQ", "T&C", "Terms Of Use", "Track Orders", "Shipping", "Cancellation", "Returns", "Privacy policy", "Grievance Redressal"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Experience App */}
        <div>
          <h3 className="font-semibold mb-3">EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="flex gap-3 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
          <h3 className="font-semibold mb-2">KEEP IN TOUCH</h3>
          <div className="flex gap-4 text-xl">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">USEFUL LINKS</h3>
          <ul className="space-y-1">
            {["Blog", "Careers", "Site Map", "Corporate Information", "Whitehat", "Cleartrip", "Myntra Global"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Guarantee and Returns */}
      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-gray-200 pt-6">
        <div className="flex items-center gap-4">
          <img src="https://constant.myntassets.com/pwa/assets/img/footer-original.png" alt="100% Original" className="h-12" />
          <p>
            <strong>100% ORIGINAL</strong> guarantee for all products at myntra.com
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img src="https://constant.myntassets.com/pwa/assets/img/footer-return.png" alt="14 Days Return" className="h-12" />
          <p>
            <strong>Return within 14days</strong> of receiving your order
          </p>
        </div>
      </div>

      {/* Popular Searches */}
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-gray-200 pt-4">
        <h4 className="text-sm font-medium mb-2 text-gray-600">POPULAR SEARCHES</h4>
        <p className="text-xs text-gray-500 leading-relaxed">
          Sherwani | Track Pants | Blazers | Sweaters For Men | Men Wedding Dresses | Kurta Pajama | Raincoats | Shorts | Trousers | Waistcoat | Inner Wear | Nightwear | Jeans | Shirts | Jogger Jeans | Men Suits | T Shirts | Sweatshirts | Jackets For Men | Tracksuits | Ripped Jeans | Ethnic Wear | Hoodies | Raksha Bandhan Gifts | Watches | Shoes | Belts | Swimwear | Dhotis | Boxers | Vests | Thermals | Socks | Shrugs | Bracelets | Rings | Sunglasses | Headphones | Wallets | Helmets | Caps | Mufflers | Gloves | Ties | Cufflinks | Men Sandals | Floaters | Flip Flops | Trunks | Bags
        </p>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-xs py-6 border-t border-gray-200 text-gray-500 flex flex-col sm:flex-row justify-between items-center">
        <p>
          In case of any concern, <a href="#" className="text-blue-600 font-semibold">Contact Us</a>
        </p>
        <p>© 2025 www.myntra.com. All rights reserved.</p>
        <p className="text-gray-400">A Flipkart company</p>
      </div>
    </footer>
  );
};

export default Footer;
