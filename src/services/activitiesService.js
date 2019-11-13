export const activities = [
  { id: 1, category: 'Cuisine', title: 'Oeufs en meurette', town: 'Dijon'},
  { id: 2, category: 'Cuisine', title: 'Joues de porc à la moutarde', town: 'Dijon'},
  { id: 3, category: 'Cuisine', title: 'Tablier de sapeur', town: 'Lyon'},
  { id: 4, category: 'Cuisine', title: 'Quenelles', town: 'Lyon'},
  { id: 5, category: 'Tourisme', title: 'Foire internationale et Gastronomique', town: 'Dijon'},
  { id: 6, category: 'Tourisme', title: 'Fête des lumières', town: 'Lyon'},
]

export function getAllActivities() {
  return new Promise(function (resolve, reject) {
    resolve(activities)
  })
}

export function getEventsByCategory(category) {
  return new Promise(function (resolve, reject) {
    const result = activities.filter(a => a.category.toLocaleLowerCase() === category.toLocaleLowerCase());
    if (result.length > 0) {
      resolve(result)
    } else {
      reject('aucune activité trouvée')
    }
  })
}

export function getEventsByTown(town) {
  return new Promise(function (resolve, reject) {
    const result = activities.filter(a => a.town.toLocaleLowerCase() === town.toLocaleLowerCase());
    if (result.length > 0) {
      resolve(result)
    } else {
      reject('aucune activité dans cette ville')
    }
  })
}
