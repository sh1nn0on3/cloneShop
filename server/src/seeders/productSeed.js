'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     return await queryInterface.bulkInsert('Products', [{
        image: "https://laptop88.vn/media/product/7002_asus_tuf_2022_f15_fx507zc_hn124w.jpg",
        cpu: "Intel Core i7-12700H",
        ssd: "512GB M.2 NVMe™ PCIe® 3.0 SSD",
        card:  "NVIDIA® GeForce RTX™ 3050 4GB DDR6",
        screen:"15.6 Inch Full HD 144Hz IPS" ,
        name: "[New 100%] Laptop Gaming Asus TUF 2022 F15 FX507ZC-HN124W - Intel Core i7 12700H | RTX 3050 | 8GB DDR5",
        price: "25.990.000Đ"
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
