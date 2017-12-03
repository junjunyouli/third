xtag.register('x-praise', {
  content: '<div id="hands" >'+
   ' <div class="pd ">'+
      '<span class="hs1"></span>'+
      '<span class="hs2"></span>'+
      '<span class="hs3"></span>'+
     ' <span class="hs4"></span>'+
      '<span class="hs5"></span>'+
      '<span class="hs6"></span>'+
    '</div>'+
    '<div id="add" class="hide" ><span >+1</span></div>'+
  '</div>',
  lifecycle:{
    created: function(){},
    inserted: function(){},
    removed: function(){},
    attributeChanged: function(){}
  },
  methods: {
    someMethod: function(){}
  },
  accessors: {
    someAccessor: {
      // links to the 'some-accessor' attribute
      attribute: {},
      set: function(){},
      get: function(){}
    }
  },
  events: {
    tap: function(){
      console.log(1)
    },
    focus: function(){}
  }
});