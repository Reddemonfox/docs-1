(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(1),a=n(9),r=(n(0),n(202)),i={id:"FormManagementModule",title:"Form Management Module",sidebar_label:"Form Management Module"},s={id:"FormManagementModule",title:"Form Management Module",description:"We at Samagra believe in empowering the governance via technology, with maximum emphasis on leveraging Open Source Technology, with an intent not to reinvent the wheel and also to provide a contribution in terms that other developers from the community can leverage our code for solving problems in same or different realms. While working in the Government frame, one of the most prominent use cases needed for various tech products is a better surveying technique that should be easily integrated, both at client and back end, in terms of retrieval and further processing of data. For that, we pinned to use [ODK Collect](https://docs.opendatakit.org/ 'https://docs.opendatakit.org/'). ODK Collect is an **open-source** Android app that replaces paper forms used in survey-based data gathering. It supports a wide range of question and answer types, and is designed to work well without **network connectivity**.\r",source:"@site/docs/Form Management Module.md",permalink:"/docs/docs/FormManagementModule",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Form Management Module.md",sidebar_label:"Form Management Module",sidebar:"someSidebar",previous:{title:"Getting Started with Samargra Mobile App Package",permalink:"/docs/docs/GettingStartedMobileComponent"},next:{title:"Ancillary Screens Package",permalink:"/docs/docs/AncillaryScreensModule"}},l=[{value:"1. Overview",id:"1-overview",children:[]},{value:"2. Setting Up ODK",id:"2-setting-up-odk",children:[{value:"2.1 Retrieving the Code",id:"21-retrieving-the-code",children:[]},{value:"2.2 Setting up ODK Aggregate",id:"22-setting-up-odk-aggregate",children:[]},{value:"2.3 Giving Storage Permissions",id:"23-giving-storage-permissions",children:[]},{value:"2.4 Initializing the Module Contract",id:"24-initializing-the-module-contract",children:[]},{value:"2.5 Using the helper methods",id:"25-using-the-helper-methods",children:[]}]},{value:"3. FAQs",id:"3-faqs",children:[]},{value:"4. Coming Soon",id:"4-coming-soon",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We at Samagra believe in empowering the governance via technology, with maximum emphasis on leveraging Open Source Technology, with an intent not to reinvent the wheel and also to provide a contribution in terms that other developers from the community can leverage our code for solving problems in same or different realms. While working in the Government frame, one of the most prominent use cases needed for various tech products is a better surveying technique that should be easily integrated, both at client and back end, in terms of retrieval and further processing of data. For that, we pinned to use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.opendatakit.org/",title:"https://docs.opendatakit.org/"}),"ODK Collect"),". ODK Collect is an ",Object(r.b)("strong",{parentName:"p"},"open-source")," Android app that replaces paper forms used in survey-based data gathering. It supports a wide range of question and answer types, and is designed to work well without ",Object(r.b)("strong",{parentName:"p"},"network connectivity"),"."),Object(r.b)("p",null,"One of the most prominent problems with respect to this though is scattered documentation in terms of integration of this functionality in your own app, rather than using ODK\u2019s provided sample app, and just using it for the required purpose. Hence, we abstracted out the app provided and configured it to an Android Library format, which can be configured from your main app via a communicating Interface. This helps you to achieve a better level of abstraction, and also the helper methods provided help you achieve the maximum utilization of the Collect App features, in terms of form download, storage, management, and processing."),Object(r.b)("h2",{id:"1-overview"},"1. Overview"),Object(r.b)("p",null,"The package and its features can be broken up into 2 main components:"),Object(r.b)("p",null,"1.1  Form Downloading"),Object(r.b)("p",null,"This involves downloading the ODK Forms to be rendered to the user. This may depend on the User\u2019s role and the level of access, varying from user to user. It also includes a basic level of configurations needed to get the ODK Collect Module to be preset."),Object(r.b)("p",null,"1.2  Form Rendering and Management"),Object(r.b)("p",null,"This involves the ability to pre-fill certain forms, based on some parameters if needed. User can fill, send forms via this functionality. If forms are filled when offline, you can also send those forms later."),Object(r.b)("h2",{id:"2-setting-up-odk"},"2. Setting Up ODK"),Object(r.b)("p",null,"This section lists down all the possible configuration related steps to integrate ODK into your app."),Object(r.b)("h3",{id:"21-retrieving-the-code"},"2.1 Retrieving the Code"),Object(r.b)("p",null,"2.1.1  Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory."),Object(r.b)("p",null,"2.1.2  Launch Android Studio. Open the main project where you are to integrate these modules. "),Object(r.b)("p",null,"2.1.3 If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the offline_module later, using the following steps."),Object(r.b)("p",null,"2.1.4  Click on your app module.\n-> Select New Module Option\n-> Select Import Library\n-> Go to the downloaded project directory\n-> Select the module, sync your gradle. "),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.")),Object(r.b)("p",null,"2.1.5  Please follow the same steps for the integration of offline_module."),Object(r.b)("p",null,"2.1.6  In the project's build.gradle, add Gradle dependency and It's Done!"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"api project(':samagra-form-management');`\n")),Object(r.b)("p",null,"2.1.7  In the settings.gradle, add ",Object(r.b)("strong",{parentName:"p"},"':samagra-form-management'"),", to the end of existing modules.\n2.1.8  Copy the config folder from the downloaded project and add to the root of your to be implemented project."),Object(r.b)("h3",{id:"22-setting-up-odk-aggregate"},"2.2 Setting up ODK Aggregate"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.getodk.org/aggregate-intro/"}),"ODK Aggregate")," is an open source Java application that stores, analyzes, and presents XForm survey data collected using ODK Collect. It supports a wide range of data types, and is designed to work well in any hosting environment."),Object(r.b)("p",null,"With Aggregate, your team can:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Host blank XForms used by ODK Collect or other OpenRosa clients"),Object(r.b)("li",{parentName:"ul"},"Store and manage XForm submission data"),Object(r.b)("li",{parentName:"ul"},"Visualize collected data using maps and simple graphs"),Object(r.b)("li",{parentName:"ul"},"Export and publish data in a variety of formats")),Object(r.b)("p",null,"Aggregate can be hosted on cloud providers such as DigitalOcean, and Amazon Web Services, or your own local or cloud server. There's also a pre-configured virtual machine image that is ready to deploy on any computer."),Object(r.b)("p",null,"Please check this link to find ","[how to set up ODK Aggregate?]","(",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.getodk.org/aggregate-setup/"}),"https://docs.getodk.org/aggregate-setup/")),Object(r.b)("p",null,"Refer this link to find steps to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.getodk.org/aggregate-use/"}),"use ODK.")),Object(r.b)("h3",{id:"23-giving-storage-permissions"},"2.3 Giving Storage Permissions"),Object(r.b)("p",null,"2.3.1\tAdd the following snippet in your AndroidManifest.xml"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'```\n`<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n```\n')),Object(r.b)("p",null,"2.3.2\tIn order to set up ODK, in your app, you will have to give Storage permissions. If not already incorporated you can incorporate this code in your main app module."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"/** Request the storage permissions which is\n* necessary for ODK to read write data related to forms */\n\n@Override\npublic void requestStoragePermissions() {\n PermissionsHelper permissionUtils = new PermissionsHelper();\n      if (!PermissionsHelper.areStoragePermissionsGranted(getMvpView().getActivityContext())) {             permissionUtils.requestStoragePermissions((SplashActivity) getMvpView().getActivityContext(), new AppPermissionUserActionListener() {\n       @Override\n        public void granted() {\n        try {\n            getIFormManagementContract().createODKDirectories();\n            //This method creates directories in your phone storage to store the\n            //downloaded and sent forms. }\n        catch (RuntimeException e) {\n            AlertDialogUtils.showDialog(AlertDialogUtils.createErrorDialog(context,\n            e.getMessage(), EXIT), context); return; } // Perform whatever action\n             you might want to perform. }\n        @Override\n        public void denied() {\n        //Prompt the user that app won't work properly\n        // if permission not granted.\n        }});\n     } else {\n     // Permissions have already been granted.  } }\n")),Object(r.b)("h3",{id:"24-initializing-the-module-contract"},"2.4 Initializing the Module Contract"),Object(r.b)("p",null,"2.4.1  Add settings.json, in the ",Object(r.b)("strong",{parentName:"p"},"res/raw")," folder of your main app module. This file contains all the configurations wit reference to the integration of ODK features in your application. You will have to configure the ODK first by downloading ODK App from Play store and configuring as per the steps mentioned in this ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.opendatakit.org/collect-import-export/",title:"https://docs.opendatakit.org/collect-import-export/"}),"link"),". Please replace ",Object(r.b)("strong",{parentName:"p"},"server_url, username, password")," fields in the settings.json file with your own credentials configured from the ODK app."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'```\n{\n    "admin": {\n        "admin_password": false,\n        "admin_pw": false,\n        "edit_saved": false,\n        "send_finalized": true,\n        "view_sent": true,\n        "get_blank": true,\n        "delete_saved": true,\n        "save_mid": false,\n        "jump_to": true,\n        "change_language": false,\n        "access_settings": true,\n        "save_as": false,\n        "mark_as_finalized": true,\n        "change_autosend": true,\n        "change_navigation": false,\n        "change_constraint_behavior": false,\n        "change_font_size": false,\n        "change_app_language": false,\n        "instance_form_sync": true,\n        "default_to_finalized": true,\n        "delete_after_send": false,\n        "high_resolution": false,\n        "image_size": true,\n        "show_splash_screen": true,\n        "show_map_sdk": true,\n        "show_map_basemap": false,\n        "analytics": false,\n        "change_form_metadata": true,\n        "change_server": false,\n        "import_settings": false,\n        "change_protocol_settings": false\n    },\n    "general": {\n        "protocol": "odk_default",\n        "server_url": "Add your Server URL here",\n        "username": "Add your username",\n        "password": "Add your ODK Password",\n        "navigation": "buttons",\n        "delete_send": false,\n        "autosend": "on",\n        "autosend_wifi": true,\n        "autosend_network": true,\n        "constraint_behavior": "on_swipe",\n        "default_to_finalized": true,\n        "high_resolution": false,\n        "image_size": "very_small",\n        "instance_sync": true\n    }\n}\n```\n')),Object(r.b)("p",null,"2.4.2  In the onCreate() of your Application-level class, please add the following method invocation"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"ComponentManager.registerFormManagementPackage(this, AppConstants.BASE_API_URL, new FormManagementSectionInteractor()); FormManagementCommunicator.setContract(ComponentManager.iFormManagementContract); ComponentManager.iFormManagementContract.setODKModuleStyle(this, R.drawable.login_bg, R.style.BaseAppTheme, R.style.FormEntryActivityTheme, R.style.BaseAppTheme_SettingsTheme_Dark, Long.MAX_VALUE);`\n")),Object(r.b)("p",null,"The method signature of registerFormManagementPackage() is as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"/**\n*\n* @param application - Application Class Instance\n* @param baseAPIUrl - Base API Url, which will be later used to make API calls.\n* @param formManagmentClassImpl - Instance of the Implementing class implementing the contract, which will further call the helper methods. */\npublic static void registerFormManagementPackage(MainApplication application, String baseAPIUrl, IFormManagementContract formManagmentClassImpl);\n")),Object(r.b)("p",null,"The method signature of setODKModuleStyle() is mentioned below"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"/**\n*  @param mainApplication - Application Class Instance\n* @param splashScreenDrawableID - Drawable Resource for the Splash Screen of ODK Module, if needed to be shown.\n* @param baseAppThemeStyleID - Theme Style ID for the ODK Module\n* @param formActivityThemeID - Theme ID for the Form Entry View\n* @param customThemeId_Settings - Theme ID for the Settings tab in ODK Module\n* @param toolbarIconResId - Resource ID for the toolbar shown in the ODK Views. */\nvoid setODKModuleStyle(MainApplication mainApplication, int splashScreenDrawableID, int baseAppThemeStyleID, int formActivityThemeID, int customThemeId_Settings, long toolbarIconResId);`\n")),Object(r.b)("p",null,"2.4.3  Apply the settings file configured above using the following snippet"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"getIFormManagementContract().applyODKCollectSettings(context, R.raw.settings);\n //R.raw.settings is the resource ID for the Settings file and context is an instance of Context //class\n")),Object(r.b)("h3",{id:"25-using-the-helper-methods"},"2.5 Using the helper methods"),Object(r.b)("p",null,"Note: In all the usages mentioned below"),Object(r.b)("p",null,"2.5.1  Deleting all the previous ODK related data"),Object(r.b)("p",null,"getIFormManagementContract() is the object of IFormManagementContract registered in the Application class above. You can pass it to the various Activities via Dagger (dependency injection), or via a helper class."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"getIFormManagementContract().resetEverythingODK();\n")),Object(r.b)("p",null,"2.5.2 Delete current users' form submissions"),Object(r.b)("p",null,"If in case if you just want to delete already filled/submitted forms for the user, use the following method"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"getIFormManagementContract().resetODKForms(context);\n")),Object(r.b)("p",null,"2.5.3  Downloading data collection forms"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Generally, the forms are downloaded for a user based on User access/role. You could use own APIs to fetch which forms to be downloaded for a user or you could use FirebaseRemoteConfig to get the name and ID of forms to be downloaded for a user.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"First, the method which can be used to fetch the list of forms available at your ODK aggregate is ahead."))),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"getIFormManagementContract().startDownloadODKFormListTask(new FormListDownloadListener())\n")),Object(r.b)("p",null,"FormListDownloadListener is a listener to listen to the response of the download task, with callbacks mentioned ahead."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"class FormListDownloadListener implements FormListDownloadResultCallback {\n@Override\n public void onSuccessfulFormListDownload(HashMap<String,\n  FormDetails> latestFormListFromServer){\n  //Returns non-null list of Forms from ODK Aggregate, as a hash map, with Key being the form ID and Value being corresponding }\n   @Override public void onFailureFormListDownload(boolean isAPIFailure) {\n   //Handle failure.\n   //isAPIFailure flag means that the API has returned error message\n   } }\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can then fetch specific forms from the list if fetched successfully fetched, ahead in the following manner."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"getIFormManagementContract().downloadODKForms(new FormDownloadListener(), formsToBeDownloaded);\n//formsTobeDownloaded is a HashMap<String, String> with Key = Form ID for the form to be downloaded and Value = Form Name of the form to be downloaded\n")))),Object(r.b)("p",null,"FormDownloadListener is a listener to listen to the response of the download task, with callbacks mentioned ahead."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"class FormDownloadListener implements DataFormDownloadResultCallback {\n@Override\npublic void formsDownloadingSuccessful(HashMap<FormDetails, String> result) {\n//Returns non-null list of Forms from ODK Aggregate, which weere chosen to be downloaded.\n//as a hash map, with Key being the form details and Value being corresponding Download status } @Override\npublic void formsDownloadingFailure() {\n //If the download of the form fails\n }\n @Override\n public void progressUpdate(String currentFile, int progress, int total) {\n  //Update the progress of download, currentFile: Name of form just being downloaded, progress: number of forms downloaded out of total forms, total: Total number of forms to be downloaded. } @Override\n   public void formsDownloadingCancelled() {\n   //If the form download cancels due to certain reason.\n   }}\n")),Object(r.b)("p",null,"2.5.4  Retreive Form IDs"),Object(r.b)("p",null,"You can fetch a form\u2019s ID if you know the form name. This is useful in case you want to open a specific form."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"getIFormManagementContract().fetchSpecificFormID(formIdentifier)\n// Form Identifier is the Form's name\n")),Object(r.b)("p",null,"2.5.5  Pre-fill information in forms"),Object(r.b)("p",null,"You can prefill certain details into a form if you know the tag to be prefilled and the form\u2019s name, in the manner mentioned ahead."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"getIFormManagementContract().updateFormBasedOnIdentifier(String formIdentifier,\n`String tag, String tagValue);\n")),Object(r.b)("p",null,"2.5.6  Launch specific forms"),Object(r.b)("p",null,"You can launch a specific form to edit and further send using the following invocation, given you know the name of the form."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"getIFormManagementContract().launchSpecificDataForm(String formIdentifier);\n")),Object(r.b)("p",null,"2.5.7  View all downloaded forms"),Object(r.b)("p",null,"You can launch a view showing all the downloaded forms using the following invocation, where the user himself can select whichever form to fill and send."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"getIFormManagementContract().launchFormChooserView(context, toolbarModificationObject);\n//context - Instance of Context class,\n/** toolbarModificationObject - HashMap<String, Object> The contents of Hash Map are as follows * and are used to modify the UI of toolbar of this View.\n* navigationIconDisplay - Boolean (true or false) navigationIconResId -\n* Integer (Resource ID for Navigation(Back) Icon in toolbar)\n*  title - String (Title of toolbar) goBackOnNavIconPress - * Boolean (enables or disables back icon)\n*/\n")),Object(r.b)("h2",{id:"3-faqs"},"3. FAQs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3.1  What version of ODK Collect we are using?")),Object(r.b)("p",null,"We are using v1.26.1."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3.2  How can I upgrade the ODK Collect verion?")),Object(r.b)("p",null,"Please check this ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/getodk/collect/releases"}),"link."),". Download the latest version. Check the changes made in the latest release. Override the changes made in the latest versions."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3.3  My app crashes, due to permission exceptions. What should I do?")),Object(r.b)("p",null,"Please note that, storage permissions though have been asked from user at the launch of app, but when launching the form view, you will have to provide, microphone/location permissions, if your forms contain questions containing media/geo-location. "),Object(r.b)("p",null,"Please refer the table below."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Permission"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Reason"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Storage"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"required for Collect to be able to access and save form data")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Camera"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"required by image and video questions to capture new media")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Contacts"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"required to configure a Google account for Google Drive, Google Sheets submissions")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Location"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"required for location questions")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Microphone"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"required by audio and video questions to capture new media")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Phone"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"optional on form send to include deviceID in the submission and required for forms that capture device metadata")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3.4  My build is failing, What should I do to debug?")),Object(r.b)("p",null,"Here are the approaches you could follow;\na) Please sync your gradle and clean your project.\nb) Check for dependency resolution errors, check the downloaded roject to see the type and version of libraries imported.\nc) Check your google-services.jsn, it should be compatible with the applicationId mentioned in your project build.gradle"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3.5  My forms don't seem to behave in the way they are supposed to be. What should I do?")),Object(r.b)("p",null,"Please check the same forms that you have configured on XLS, on the ODK Collect app, if the form doesn't work there, please check your form structure, you will have to debug to check as this means there has been some issue with your form."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3.6  How can I configure auto-sending the forms on internet connectivity issue?")),Object(r.b)("p",null,'ODK is a robust tool developed to handle offline scenarios. Auto send When enabled in setings.json (Add "autosend": "on"), forms are sent immediately when they are finalized, if the device can connect to the internet. If an internet connection is not available at the time of finalization, your finalized forms will be queued to send as soon as connectivity\nis established. You can specify whether to send over WiFi, cellular data, or both.'),Object(r.b)("h2",{id:"4-coming-soon"},"4. Coming Soon"),Object(r.b)("p",null,"Please review the following section to get information about planned updates to this module."))}d.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||r;return n?a.a.createElement(m,s({ref:t},c,{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);