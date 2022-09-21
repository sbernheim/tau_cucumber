class Home {
  get url() {
    return "/";
  }
  get searchField() {
    return $("#search_query_top");
  }

  get searchButton() {
    return $(".btn.btn-default.button-search");
  }

  get womenMenuOption() {
    return $('ul.menu-content >li >a[title="Women"]');
  }

  get dressesMenuOption() {
    return $('ul.menu-content >li >a[title="Dresses"]');
  }

  get tshirtMenuOption() {
    return $('ul.menu-content >li >a[title="T-shirts"]');
  }

  /**
   * Searches for a keyword
   *
   * @param {String} keyword Search term
   */
  async search(keyword) {
    await this.searchField.waitForDisplayed(2000);
    await this.searchField.setValue(keyword);
    await this.searchButton.click();
  }

}

module.exports = new Home();
