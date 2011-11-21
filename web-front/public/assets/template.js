(function(){
window.JST = window.JST || {};

window.JST['login'] = Haml('#loginmodal.modal.hide.fade\n        \n        .modal-header Login\n        .modal-body\n            %form#doLogin(action="#" onsubmit="return false")\n                .clearfix\n                    %label(for=\'email\') email:\n                    %input(type=\'text\' name=\'email\')\n                .clearfix\n                    %label(for=\'password\') password:\n                    %input(type=\'password\' name=\'password\')\n        .modal-footer\n            %button.btn.primary.login Login\n            %button.btn.cancel Cancel\n\n#registermodal.modal.hide.fade\n    .modal-header Register\n    .modal-body\n        %form#doRegister(action="#" onsubmit="return false")\n            %fieldset\n                .clearfix\n                    %label firstname:\n                    %input(type=\'text\' name=\'firstname\')\n                .clearfix\n                    %label lastname:\n                    %input(type=\'text\' name=\'lastname\')\n                .clearfix\n                    %label email:\n                    %input(type=\'text\' name=\'email\')\n                .clearfix\n                    %label password:\n                    %input(type=\'password\' name=\'password\')\n                .actions\n                    %input.btn.primary(type="submit" value="Register")\n                    %button.btn Cancel\n\n');
window.JST['nabaztag'] = Haml('.row\n    .span8= name\n.row\n    .span8\n        %form.play(action="#" onsubmit="return false")\n            %fieldset\n                %legend Play sound\n                .clearfix\n                    %label(for=\'url\') url:\n                    %input.playUrl(type=\'text\' name=\'url\')\n                .actions\n                    %input.btn.primary(type="submit" value="Play")\n                \n\n%a.btn(href="#nabaztag/list") Back');
window.JST['nabaztag_add'] = Haml('%form#addNabaztag(action="#" onsubmit="return false")\n    %fieldset\n        %legend Add Nabaztag\n        .clearfix\n            %label(for=\'mac\') mac:\n            %input(type=\'text\' name=\'mac\')\n        .clearfix\n            %label(for=\'name\') name:\n            %input(type=\'text\' name=\'name\')\n        .actions\n            %input.btn.primary(type="submit" value="Add")\n');
window.JST['nabaztag_collection'] = Haml('.nabaztagCollection\n.footer\n    .addNabaztag.btn Add Nabaztag');
window.JST['nabaztag_item'] = Haml('.nabaztagItem\n    .row\n        .span3\n            .name= name\n        .span2\n            .label.btn.info.action action\n            .label.btn.danger X');
})();