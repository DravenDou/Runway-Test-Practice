
import { RunwayPage } from '../../Pages/RunwayPage';
import Page from '../../pageFactory/Page';


describe('Runway AI Test', () => {
    it('Generative Audio ', () => {
        const runwayPage = new RunwayPage();
        const username = 'testingrunw@gmail.com';
        const password = 'IgniteIV'; 

        runwayPage.loginWithSession(username, password);
        runwayPage.clickOnGenerativeAudio();
        runwayPage.createExampleScript();
        runwayPage.selectRandomVoiceStyle();
        runwayPage.clickGenerate();
        runwayPage.waitFor8();
        runwayPage.playGenerateAudio();
        runwayPage.waitFor5();
        runwayPage.clickFullDetailsButton();
        runwayPage.clickShowScriptButton();
        runwayPage.clickUseAsImputButton();
     
       








    });
});
