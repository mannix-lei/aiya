import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
    public left: boolean = true;
    public todos = [
        { txt: 'Saving Account' },
        { txt: 'Interest Account' },
        { txt: 'Checking Account' },
        { txt: 'UserList' },
    ];
    public activeIndex: string = '1';
    public activeIndex2: string = '1';

    public show(x: string) {
        if (x === 'Saving Account') {
            this.$router.push('/savingAccount');
        } else if (x === 'Interest Account') {
            this.$router.push('/interestAccount');
        } else if (x === 'Checking Account') {
            this.$router.push('/checkingAccount');
        } else if (x === 'UserList') {
            this.$router.push('/userList');
        }
    }
    public handleSelect(key: number) {
        if (key === 1) {
            this.$router.push('/savingAccount');
        } else if (key === 2) {
            this.$router.push('/interestAccount');
        } else if (key === 3) {
            this.$router.push('/checkingAccount');
        } else if (key === 4) {
            this.$router.push('/userList');
        }
    }
}
