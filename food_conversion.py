
#calculate Basil Metabolic rate of man or woman (man parameter is a boolean)

def BMS(man,height_ft,height_in,weight_lb,age_years):
    #convert from lb to kg
    weight_kg = weight_lb/2.205
    
    #convert height to cm
    height_cm=(height_ft*30.48)+(height_in*2.54)
    
    #use Harris-Benedict Equation to calculate
    if man:
        return 88.362+(13.397*weight_kg)+(4.799*height_cm)-(5.667*age_years)

    else:
        return  447.593 +(9.247 * weight_kg) + (3.098* height_cm) - (4.330*age_years)


