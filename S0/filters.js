  const classFilters = [].slice.call(document.querySelectorAll('[group="class"]'));
  const roleFilters = [].slice.call(document.querySelectorAll('[group="role"]'));
  const allFilters = classFilters.concat(roleFilters);
  const filterContents = [].slice.call(document.querySelectorAll('.buildsFeed'));

  allFilters.forEach((filter) => {
    filter.addEventListener('click', filterToggle);
  });
    
  function filterToggle() {
    const filter = this.getAttribute('filter');
    const group = this.getAttribute('group');

    if (this.classList.contains('active')) {
      this.classList.remove('active');
      applyFilter();
      return;
    } else resetButtons(group);

    this.classList.add('active');
    applyFilter();
  }

  function showAll() {
    filterContents.forEach(content => content.classList.add('show'));
    resetButtons('class')
    resetButtons('role')
    document.getElementById("filterList").textContent = 'All Builds';
  }

  function resetButtons(name) {
   const groupName = [].slice.call(document.querySelectorAll('[group=' + name + ']'));
   groupName.forEach(filter => filter.classList.remove('active'));
  }
  
  function resetFilterContent() {
    filterContents.forEach(content => content.classList.remove('show'));
  }

  function applyFilter() {
    let selectedFilters = [].slice.call(document.querySelectorAll('[filter].active')).map(filter => filter.getAttribute('filter'));
    const selector = ["buildsFeed"].concat(selectedFilters).map(filter => '[class~="'+ filter +'"]').join('');
    filterText();
    document.querySelectorAll(selector).forEach(content => content.classList.add('show'));
  }
  
  applyFilter();

  function filterText () {
    let selectedFilters = [].slice.call(document.querySelectorAll('[filter].active')).map(filter => filter.getAttribute('filter'));
    if (selectedFilters.length === 0) { document.getElementById("filterList").textContent = 'All Builds';
    } else { document.getElementById("filterList").textContent = selectedFilters.join(' ') + ' Builds';
    }
    resetFilterContent();
  }