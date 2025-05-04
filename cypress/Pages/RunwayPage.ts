import AppObjsMap from "../appObjects/appObjects";
import Page from "../pageFactory/Page";
import Chainable = Cypress.Chainable;

export class RunwayPage extends Page {
   
    get googleSignInButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('googleSignInButton'),
            AppObjsMap.appObjectLocators.get('googleSignInButton'));
    }
    
    get emailField(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('emailField'),
            AppObjsMap.appObjectLocators.get('emailField'));
    }

    get passwordField(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('passwordField'),
            AppObjsMap.appObjectLocators.get('passwordField'));
    }

    get loginButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('loginButton'),
            AppObjsMap.appObjectLocators.get('loginButton'));
    }

    get mainPageElement(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('mainPageElement'),
            AppObjsMap.appObjectLocators.get('mainPageElement'));
    }
    get generateAudioBox(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('generateAudioBox'),
            AppObjsMap.appObjectLocators.get('generateAudioBox'));
    }
    get textToAudioInput(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('textToAudioInput'),
            AppObjsMap.appObjectLocators.get('textToAudioInput'));
    }
    get generateButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('generateButton'),
            AppObjsMap.appObjectLocators.get('generateButton'));
    }
    get playAudioButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('playAudioButton'),
            AppObjsMap.appObjectLocators.get('playAudioButton'));
    }
    get fullAudioDetailsButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('fullAudioDetailsButton'),
            AppObjsMap.appObjectLocators.get('fullAudioDetailsButton'));
    }
    get baseBox(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('baseBox'),
            AppObjsMap.appObjectLocators.get('baseBox'));
    }
    get showText(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('showText'),
            AppObjsMap.appObjectLocators.get('showText'));
    }

    get duplicateAudioBox(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('duplicateAudioBox'),
            AppObjsMap.appObjectLocators.get('duplicateAudioBox'));
    }

    get AudioBox(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('AudioBox'),
            AppObjsMap.appObjectLocators.get('AudioBox'));
    }

    get exitButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('exitButton'),
            AppObjsMap.appObjectLocators.get('exitButton'));
    }
    get exitButtontwo(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('exitButtontwo'),
            AppObjsMap.appObjectLocators.get('exitButtontwo'));
    }
    get reuseButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('reuseButton'),
            AppObjsMap.appObjectLocators.get('reuseButton'));
    }
    
    get duplicateScriptText(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('duplicateScriptText'),
            AppObjsMap.appObjectLocators.get('duplicateScriptText'));
    }

    get backroundText(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('backroundText'),
            AppObjsMap.appObjectLocators.get('backroundText'));
    }

    get faceImages(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('faceImages'),
            AppObjsMap.appObjectLocators.get('faceImages'));
    }

    get playVideoButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('playVideoButton'),
            AppObjsMap.appObjectLocators.get('playVideoButton'));
    }

    get videoBox(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('videoBox'),
            AppObjsMap.appObjectLocators.get('videoBox'));
    }

    get folderButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('folderButton'),
            AppObjsMap.appObjectLocators.get('folderButton'));
    }

    get generativeFolder(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('generativeFolder'),
            AppObjsMap.appObjectLocators.get('generativeFolder'));
    }

    get addFolderButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('addFolderButton'),
            AppObjsMap.appObjectLocators.get('addFolderButton'));
    }

    get addFolderInput(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('addFolderInput'),
            AppObjsMap.appObjectLocators.get('addFolderInput'));
    }

    get selectFolderButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('selectFolderButton'),
            AppObjsMap.appObjectLocators.get('selectFolderButton'));
    }

    get scoreStars(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('scoreStars'),
            AppObjsMap.appObjectLocators.get('scoreStars'));
    }
    get ratingBanner(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('ratingBanner'),
            AppObjsMap.appObjectLocators.get('ratingBanner'));
    }

    get generativeAudioBlock(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('generativeAudioBlock'),
            AppObjsMap.appObjectLocators.get('generativeAudioBlock'));
    }

    get selectVoiceButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('selectVoiceButton'),
            AppObjsMap.appObjectLocators.get('selectVoiceButton'));
    }

    get downloadButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('downloadButton'),
            AppObjsMap.appObjectLocators.get('downloadButton'));
    }

    get showScriptButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('showScriptButton'),
            AppObjsMap.appObjectLocators.get('showScriptButton'));
    }
    get useAsImputButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('useAsImputButton'),
            AppObjsMap.appObjectLocators.get('useAsImputButton'));
    }

    get deleteButton(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('deleteButton'),
            AppObjsMap.appObjectLocators.get('deleteButton'));
    }



    navigateToLogin(): void {
        cy.visit('https://app.runwayml.com/login');
    }

    elementShouldBeVisible(element: Chainable<JQuery>): void {
        element.should('be.visible');
    }

    loginWithSession(username: string, password: string): void {
            this.navigateToLogin();
            this.typeToElement(this.emailField, username);
            this.typeToElement(this.passwordField, password);
            this.clickOnElement(this.loginButton);
            this.waitFor5();
            this.elementShouldBeVisible(this.mainPageElement);
    }

    clickOnGenerativeAudio(): void {
      
        this.scrollToElement(this.generativeAudioBlock);
        this.clickOnElement(this.generativeAudioBlock);
        cy.wait(500);
    }
    createExampleScript(): void {
        this.clickOnElement(this.textToAudioInput);
        this.typeToElement(this.textToAudioInput, 'Hello World I am an AI');
    
    }

    selectRandomVoiceStyle(): void {
        this.selectVoiceButton.then(voiceButtons => {
            const randomIndex = this.getRandomIndex(voiceButtons.length);
            const randomVoiceButton = voiceButtons.eq(randomIndex);
            this.clickOnElement(cy.wrap(randomVoiceButton));
        });
    }
    waitFor8(){
        this.waitForTimeout(8)
    }
    waitFor5(){
        this.waitForTimeout(5)
    }

    waitFor1Minute(){
        this.waitForTimeout(71)
    }

    clickGenerate(): void {
        this.clickOnElement(this.generateButton)
    }
    playGenerateAudio() : void {
        this.elementShouldBeVisible(this.AudioBox)
        this.clickOnElement(this.playAudioButton)
    }
    clickFullDetailsButton(): void {
       this.clickOnElement(this.fullAudioDetailsButton)
      this.elementShouldBeVisible(this.baseBox)
      
        };
    clickShowScriptButton(): void {
        // cy.get('button.Button-sc-1vlwdat-0.AudioGeneration__InlineGenerationOptionButton-sc-9sg2co-0')
        // .contains('span', 'Show script')
        //  .click({force:true});
         this.elementShouldBeVisible(this.showText)
    }

    clickUseAsImputButton(): void {
        this.clickOnElement(this.useAsImputButton)
        this.elementShouldBeVisible(this.duplicateAudioBox)
    }

    clickDownloadButton(): void {
            this.clickOnElement(this.downloadButton)
    }

    clickExitButton() : void {
        this.clickOnElement(this.exitButton)
        this.clickOnElement(this.exitButtontwo)
    }


    clickReuseButton(): void {
       this.clickOnElement(this.fullAudioDetailsButton)
      this.clickOnElement(this.reuseButton)
      this.elementShouldBeVisible(this.duplicateScriptText)
        };

        clickDeleteButton(): void {
        this.clickOnElement(this.deleteButton)
             this.elementShouldBeVisible(this.backroundText)
             
        }


        selectRandomFace(): void {
            this.faceImages.then(faceImages => {
                const randomIndex = this.getRandomIndex(faceImages.length);
                const randomFace = faceImages.eq(randomIndex);
                this.clickOnElement(cy.wrap(randomFace));
            });
        }

        clickVideoButton() : void {
            this.elementShouldBeVisible(this.videoBox);
            this.clickOnElement(this.playVideoButton);
        }

        clickFolderButton() : void {
            this.elementShouldBeVisible(this.folderButton);
            this.clickOnElement(this.folderButton);
        }

        clickPrivateGenerative() : void {
        //  cy.get("div.Base__Box-sc-thne2y-0.jBUZLm p").contains('Private Assets')
        //    .click();
          this.clickOnElement(this.generativeFolder);
        }

        addNewFolder() : void {
          this.clickOnElement(this.addFolderButton);
          this.typeToElement(this.addFolderInput, 'New{enter}');
          this.clickOnElement(this.selectFolderButton);

        }

        selectRandomStar(): void {
            this.scoreStars.then(stars => {
                const randomIndex = this.getRandomIndex(stars.length);
                const randomStar = stars.eq(randomIndex);
                this.clickOnElement(cy.wrap(randomStar));
            });

            this.elementShouldBeVisible(this.ratingBanner);

        
        }


}


    



  