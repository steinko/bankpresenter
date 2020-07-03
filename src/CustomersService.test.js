import  {getCustomers} from './CustomersService'
it('should deliver custeomers', () => {
	expect(getCustomers()).toIncludeAllMembers(['Stein Korsveien', 'Oddmund Korsveien'])
})